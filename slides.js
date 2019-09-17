/*
  Layouts: {
    "default": content
    "verticalSplit": leftContent, rightContent
  }

  Types: {
    "titleSubtitle":
      content.title
      content.subtitle
    "bio":
      content.photo
      content.twitter
      content.slack
    "bigOneLiner":
      content.title
  }
*/

const slides = [
  {
    number: 0,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Framework Free"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Functional HTML Rendering and State Management in Vanilla* JS"
        }
      ]
    }
  },
  {
    number: 1,
    layout: "default",
    type: "bio",
    content: {
      photo: {
        class: "bio-pic",
        source: "./assets/drewface.png",
        alt: "Drew's smiling face"
      },
      twitter: [
        {
          element: "img",
          class: "social-logo",
          source: "./assets/twitterlogo.png",
          alt: "Twitter Logo"
        },
        {
          element: "div",
          class: "social-text",
          text: "@drewwarrentiy"
        }
      ],
      slack: [
        {
          element: "img",
          class: "social-logo",
          source: "./assets/utahjslogo.png",
          alt: "Utah JS Logo"
        },
        {
          element: "div",
          class: "social-text",
          text: "drewwarrentiy"
        }
      ]
    }
  },
  {
    number: 2,
    layout: "default",
    type: "bigOneLiner",
    content: {
      oneLiner: {
        element: "h1",
        class: "big-one-liner",
        text: "What will I get wrong?"
      }
    }
  },
  {
    number: 3,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Framework Free"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Functional HTML Rendering and State Management in Vanilla* JS"
        }
      ]
    }
  },
  {
    number: 4,
    layout: "default",
    type: "bigOneLiner",
    content: {
      oneLiner: {
        element: "h1",
        class: "big-one-liner",
        text: "Who will benefit?"
      }
    }
  },
  {
    number: 5,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "bold",
        text: "Framework Free"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Functional HTML Rendering and State Management in Vanilla* JS"
        }
      ]
    }
  },
  {
    number: 6,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Framework Free"
      },
      subtitle: [
        {
          element: "h2",
          class: "bold",
          text: "Functional HTML Rendering"
        },
        {
          element: "h2",
          class: "",
          text: "\xA0and State Management in Vanilla* JS"
        }
      ]
    }
  },
  {
    number: 7,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Framework Free"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Functional HTML Rendering and State Management\xA0"
        },
        {
          element: "h2",
          class: "bold",
          text: "in Vanilla* JS"
        }
      ]
    }
  },
  {
    number: 8,
    layout: "verticalSplit",
    type: "textandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Employment History"
        }
      },
      rightContent: {
        element: "img",
        class: "employers-image",
        source: "./assets/employers.png",
        alt: "Logos of Daplie, Edquity and MX"
      }
    }
  },
  {
    number: 9,
    layout: "verticalSplit",
    type: "textandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "The Project that Led to this Talk"
        }
      },
      rightContent: {
        element: "img",
        class: "iot-demo",
        source: "./assets/iot-demo.gif",
        alt: "Gif showing IOT demo"
      }
    }
  },
  {
    number: 10,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "SPA vs MPA"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Pros and Cons"
        }
      ]
    }
  },
  {
    number: 11,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Functional HTML Rendering"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Create an Element"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "create-element",
        source: "./assets/create-element.png",
        alt: "Example code that creates HTML elements"
      }
    }
  },
  {
    number: 12,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Functional HTML Rendering"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Destroy an Element"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "destroy-element",
        source: "./assets/destroy-element.png",
        alt: "Example code that destroys HTML elements"
      }
    }
  },
  {
    number: 13,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Functional HTML Rendering"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Elements from an array"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "array-element",
        source: "./assets/array-element.png",
        alt: "Example code makes HTML from an array"
      }
    }
  },
  {
    number: 14,
    layout: "verticalSplit",
    type: "screenshotAndTitleSubtitle",
    content: {
      leftContent: {
        element: "img",
        class: "hof-fruits",
        source: "./assets/hof-fruits.png",
        alt: "Higher Order Function examples with fruits"
      },
      rightContent: {
        title: {
          element: "h1",
          class: "",
          text: "Higher Order Functions"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Image from: atendesigngroup.com"
          }
        ]
      }
    }
  },
  {
    number: 15,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Functional HTML Rendering"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "render()"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "render-elements",
        source: "./assets/render-elements.png",
        alt: "Example Code of a render function"
      }
    }
  },
  {
    number: 16,
    layout: "verticalSplit",
    type: "screenshotAndTitleSubtitle",
    content: {
      leftContent: {
        element: "img",
        class: "render-functions",
        source: "./assets/render-functions.png",
        alt: "Example code where functions describe state"
      },
      rightContent: {
        title: {
          element: "h1",
          class: "",
          text: "State Management"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Lots of Functions"
          }
        ]
      }
    }
  },
  {
    number: 17,
    layout: "verticalSplit",
    type: "screenshotAndTitleSubtitle",
    content: {
      leftContent: {
        element: "img",
        class: "render-localstorage",
        source: "./assets/render-localstorage.png",
        alt: "Example Code getting and setting state in local storage"
      },
      rightContent: {
        title: {
          element: "h1",
          class: "",
          text: "State Management"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "localStorage"
          }
        ]
      }
    }
  },
  {
    number: 18,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Why?"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Useful errors"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "comp-error-son",
        source: "./assets/comp-error-son.gif",
        alt: "Gif comparing JS errors to react errors"
      }
    }
  },
  {
    number: 19,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Why?"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Readability (for all)"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "hello-code-js",
        source: "./assets/hello-code-js.png",
        alt: "HTML and JS code that displays Hello World"
      }
    }
  },
  {
    number: 20,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Why?"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Ownership"
        }
      ]
    }
  },
  {
    number: 21,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "Why?"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Your role models did this. Probably."
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "role-models",
        source: "./assets/role-models.png",
        alt: "Drews role models and their thoughts on DOM API"
      }
    }
  },
  {
    number: 22,
    layout: "verticalSplit",
    type: "titleSubtitleandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "When?"
        },
        subtitle: [
          {
            element: "h2",
            class: "",
            text: "Simple Applications"
          }
        ]
      },
      rightContent: {
        element: "img",
        class: "app-ception",
        source: "./assets/app-ception.png",
        alt: "screen shot of a screen shot of a screen shot of the slide"
      }
    }
  },
  {
    number: 23,
    layout: "default",
    type: "titleSubtitle",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Challenge"
      },
      subtitle: [
        {
          element: "h2",
          class: "",
          text: "Don't reach for your favorite framework"
        }
      ]
    }
  },
  {
    number: 24,
    layout: "verticalSplit",
    type: "textandScreenshot",
    content: {
      leftContent: {
        title: {
          element: "h1",
          class: "",
          text: "I want to see it!"
        }
      },
      rightContent: {
        element: "img",
        class: "screenshot",
        source: "./assets/utahjslogo.png",
        alt: "Utah JS Logo"
      }
    }
  },
  {
    number: 25,
    layout: "default",
    type: "bigOneLiner",
    content: {
      oneLiner: {
        element: "h1",
        class: "big-one-liner",
        text: "What did I get wrong?"
      }
    }
  },
  {
    number: 26,
    layout: "default",
    type: "thankYou",
    content: {
      title: {
        element: "h1",
        class: "",
        text: "Thank You!"
      },
      twitter: [
        {
          element: "img",
          class: "social-logo",
          source: "./assets/twitterlogo.png",
          alt: "Twitter Logo"
        },
        {
          element: "div",
          class: "social-text",
          text: "@drewwarrentiy"
        }
      ],
      slack: [
        {
          element: "img",
          class: "social-logo",
          source: "./assets/utahjslogo.png",
          alt: "Utah JS Logo"
        },
        {
          element: "div",
          class: "social-text",
          text: "drewwarrentiy"
        }
      ]
    }
  }
];
