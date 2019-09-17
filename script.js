// DOM MANIPULATION //

function clearPage() {
  const app = document.getElementById("app");
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}

function handleKeyUp(event) {
  const state = getState();
  if (event.keyCode === 39 || event.keyCode === 32) {
    return incrementSlide(getState() || initialState);
  }

  if (event.keyCode === 37) {
    return decrementSlide(getState() || initialState);
  }
}

function buildLayout(layout) {
  const app = document.getElementById("app");

  if (layout === "default") {
    const defaultContainer = document.createElement("div");
    defaultContainer.className = "default-container";
    return app.appendChild(defaultContainer);
  }

  if (layout === "verticalSplit") {
    const leftContainer = document.createElement("div");
    leftContainer.className = "left-container";
    app.appendChild(leftContainer);
    const rightContainer = document.createElement("div");
    rightContainer.className = "right-container";
    return app.appendChild(rightContainer);
  }

  const forgotLayout = document.createElement("h1");
  app.appendChild(forgotLayout);
  forgotLayout.innerHTML = "You forgot to pass a layout";
}

function createTextElement(elementOptions) {
  const newElement = document.createElement(elementOptions.element);
  newElement.className = elementOptions.class;
  newElement.innerHTML = elementOptions.text;
  return newElement;
}

function createImgElement(elementOptions) {
  const newElement = document.createElement("img");
  newElement.className = elementOptions.class;
  newElement.src = elementOptions.source;
  newElement.alt = elementOptions.alt;
  return newElement;
}

function createSocialElement(elementOptions) {
  const socialContainer = document.createElement("div");
  socialContainer.className = "social-container";
  elementOptions.map(c => {
    if (c.element === "img") {
      return socialContainer.appendChild(createImgElement(c));
    }
    if (c.element === "div") {
      return socialContainer.appendChild(createTextElement(c));
    }
  });
  return socialContainer;
}

function addContent(type, content) {
  const defaultContainer = document.querySelector(".default-container");
  const leftContainer = document.querySelector(".left-container");
  const rightContainer = document.querySelector(".right-container");
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";
  const subtitleContainer = document.createElement("div");
  subtitleContainer.className = "subtitle-container";

  if (type === "titleSubtitle") {
    defaultContainer.appendChild(titleContainer);
    defaultContainer.appendChild(subtitleContainer);
    const title = createTextElement(content.title);
    titleContainer.appendChild(title);
    return content.subtitle.map(c => {
      const subElement = createTextElement(c);
      return subtitleContainer.appendChild(subElement);
    });
  }
  if (type === "bigOneLiner") {
    defaultContainer.appendChild(titleContainer);
    const oneLiner = createTextElement(content.oneLiner);
    titleContainer.appendChild(oneLiner);
  }
  if (type === "bio") {
    const biopic = createImgElement(content.photo);
    defaultContainer.appendChild(biopic);
    const twitter = createSocialElement(content.twitter);
    const slack = createSocialElement(content.slack);
    defaultContainer.appendChild(twitter);
    defaultContainer.appendChild(slack);
  }
  if (type === "textandScreenshot") {
    const title = createTextElement(content.leftContent.title);
    leftContainer.appendChild(title);
    const screenshot = createImgElement(content.rightContent);
    rightContainer.appendChild(screenshot);
  }
  if (type === "screenshotAndText") {
    const title = createTextElement(content.rightContent.title);
    rightContainer.appendChild(title);
    const screenshot = createImgElement(content.leftContent);
    leftContainer.appendChild(screenshot);
  }
  if (type === "titleSubtitleandScreenshot") {
    leftContainer.appendChild(titleContainer);
    leftContainer.appendChild(subtitleContainer);
    const title = createTextElement(content.leftContent.title);
    titleContainer.appendChild(title);
    content.leftContent.subtitle.map(c => {
      const subElement = createTextElement(c);
      return subtitleContainer.appendChild(subElement);
    });
    const screenshot = createImgElement(content.rightContent);
    rightContainer.appendChild(screenshot);
  }
  if (type === "screenshotAndTitleSubtitle") {
    rightContainer.appendChild(titleContainer);
    rightContainer.appendChild(subtitleContainer);
    const title = createTextElement(content.rightContent.title);
    titleContainer.appendChild(title);
    content.rightContent.subtitle.map(c => {
      const subElement = createTextElement(c);
      return subtitleContainer.appendChild(subElement);
    });
    const screenshot = createImgElement(content.leftContent);
    leftContainer.appendChild(screenshot);
  }
  if (type === "thankYou") {
    const thankYou = createTextElement(content.title);
    defaultContainer.appendChild(thankYou);
    const twitter = createSocialElement(content.twitter);
    const slack = createSocialElement(content.slack);
    defaultContainer.appendChild(twitter);
    defaultContainer.appendChild(slack);
  }
}

function addProgress(state) {
  const app = document.getElementById("app");
  const progressIndicator = document.createElement("p");
  const progressIndicatorNode = document.createTextNode(
    state.slide + 1 + "/" + slides.length
  );
  progressIndicator.className = "progress-indicator";
  progressIndicator.appendChild(progressIndicatorNode);
  app.appendChild(progressIndicator);
}

function render(state) {
  clearPage();
  buildLayout(slides[state.slide].layout);
  addContent(slides[state.slide].type, slides[state.slide].content);
  addProgress(state);
}

app.addEventListener("keyup", handleKeyUp);

// STATE MANIPULATION //

const initialState = { random: "Does not update", slide: 0 };

function getState() {
  return JSON.parse(localStorage.getItem("frameworkFree"));
}

function incrementSlide(state) {
  const slideUpdate =
    state.slide < slides.length - 1
      ? {
          slide: slides[state.slide].number + 1
        }
      : { slide: 0 };
  localStorage.setItem(
    "frameworkFree",
    JSON.stringify(Object.assign({}, state, slideUpdate))
  );
  return render(getState());
}

function decrementSlide(state) {
  const slideUpdate =
    state.slide === 0
      ? {
          slide: slides.length - 1
        }
      : { slide: slides[state.slide].number - 1 };
  localStorage.setItem(
    "frameworkFree",
    JSON.stringify(Object.assign({}, state, slideUpdate))
  );
  return render(getState());
}

// INITIALIZE //

render(getState() || initialState);
