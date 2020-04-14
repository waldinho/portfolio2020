module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/REST/portfolio.js":
/*!*************************************!*\
  !*** ./pages/api/REST/portfolio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const portfolio = [{
  title: "Work",
  companies: [{
    id: 1,
    title: "Hit Network",
    url: "/hit-network",
    text: [{
      id: 1,
      paragraph: "A big part of my role whilst at Southern Cross Austereo was the redesign of the Hit Network website. This was predominately UX/UI focused and involved building out new React components and Next.js pages."
    }, {
      id: 2,
      paragraph: "I worked closely with the product owners and UX/UI designers to ensure that the components and pages we were building were to spec."
    }, {
      id: 3,
      paragraph: "As well as building out these new components and pages we had a big push on test coverage where I wrote a number of unit tests using Jest and Enzyme as well as UI tests using React Testing Library."
    }]
  }, {
    id: 2,
    title: "Triple M",
    url: "/triple-m",
    text: [{
      id: 1,
      paragraph: "The Triple M website was another website I was involved in the daily upkeep and development on while I was at Southern Cross Austereo."
    }, {
      id: 2,
      paragraph: "One of me key achievements while working on the Triple M website was the DAB radio section on the website. This section allowed users to search for their favourite DAB station."
    }, {
      id: 3,
      paragraph: "I was responsible for the creation of the search page with the build of the UI components in React for the page and the layout of the page in Next.js."
    }]
  }, {
    id: 3,
    title: "Podcast One",
    url: "/podcast-one",
    text: [{
      id: 1,
      paragraph: "During my time working at Southern Cross Austereo one of the websites I worked on was Podcat One Australaia, this is an online platform that allows users to listen to their favourite podcasts.."
    }, {
      id: 2,
      paragraph: "The stand out project that I worked on with Podcast One Australia was the curated playlists section, this allowed content editors to pick various different episodes from different podcasts and create a playlist with said episodes."
    }, {
      id: 3,
      paragraph: "The tech stack used at Podcast One australia was as follows... React.js, Next.js, GraphQL/Apollo Server, Styled Components and Google Cloud Platform."
    }]
  }, {
    id: 4,
    title: "Bunnings Warehouse",
    url: "/bunnings",
    text: [{
      id: 1,
      paragraph: "At AKQA I worked solely on the Bunnings account, specifically the Bunnings commerce team, my main responsibilities were to impliment new features on the Bunnings web site and bugfix when required. I have implimented a number of features whilst working on the Bunnings website, the most notable being the Team Member discount, Corperage Gift Cards section and PayPal and ZipPay Integration features."
    }, {
      id: 2,
      paragraph: "As you can imagine the Bunnings website is absolutely huge and by far the biggest project I have worked on to date, it is actually the biggest ecommerce project in the southern hempisphere at the moment so I am now very well versed in being part of a large development team and everything that goes with that."
    }, {
      id: 3,
      paragraph: "The front end on the commerce section of the Bunnings website is all React/Redux based and I have now gained significant experience in these technologies, as well as furthing my existing front end skills and ingetrating with the back end setup (Sitecore)."
    }]
  }, // {
  //     id: 5,
  //     title: "Homebase",
  //     url: "/homebase",
  //     text: [
  //         {
  //             id: 1,
  //             paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  //         },
  //         {
  //             id: 2,
  //             paragraph: "Homebase - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  //         },
  //         {
  //             id: 3,
  //             paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  //         }
  //     ]
  // },
  {
    id: 6,
    title: "The Independent",
    url: "/independent",
    text: [{
      id: 1,
      paragraph: "I recieved a brief while working at The Independent to create a landing page for users that had subscribed to The Independent daily app the previous year to offer them a free gift for renewing thier yearly subscription. The Lading page consisted of several options of the free gift the user was able to choose plus a simple form to fill out providing the customer support team with the relevent details of said user."
    }, {
      id: 2,
      paragraph: "The functionality where the user was able to select thier free gift was built using javascript with the landing page template being built using standard HTML and CSS and the email being sent out to from the form the filled in to the customer support team using a php."
    }, // {
    //     id: 3,
    //     paragraph: "The finished version of the landing page can be found <a href=\"http://www.james-waller.co.uk/loyal-subscribers\" className=\"link-indy\" target=\"_blank\">here</a>."
    // },
    {
      id: 4,
      paragraph: "And, the original designs for the landing page can be perused below. The only change from the original design was to implement a different font on the landing page to what was on the original designs."
    }]
  }, {
    id: 7,
    title: "The Evening Standard",
    url: "/evening-standard",
    text: [{
      id: 1,
      paragraph: "During summer 2017, I undertook a huge prjoect for The Evening Standard, the task was to re-work the whole of the site's front end. As you may or may not know The Evening Standard is a huge website, so this was no mean feat."
    }, {
      id: 2,
      paragraph: "I recieved the designs from the internal Graphic Designer. The designs were very different from the old site, as well as this we had decided to make the site more modular so sections of the site were now controlled in modules on the front and back end. So this meant changing the SASS and the template structuring."
    }, {
      id: 3,
      paragraph: "The templates were built using ejs, this allowed us to parse the data in using a json feed. The whole site worked on the MVC framework structuring principle and as you can see from the before and after shots of the homepage below (exuse the image quality, it was a VERY large file) I think it turned out very well."
    }]
  }, {
    id: 8,
    title: "eBay",
    url: "/ebay",
    text: [{
      id: 1,
      paragraph: "During my time at FEED, my main responsibilty was working on various different projects for the eBay account. These projects mainly consisted of building landing pages, micro tools and promotional emails for the main eBay site."
    }, {
      id: 2,
      paragraph: "I have included a few examples below of a small selection of work I did during my time working on the eBay account."
    }, {
      id: 3,
      paragraph: "A common problem eBay were having was that users, whilst on thier site, didn't know the specific tyre type for thier car. So to make this process easier we decided to create a piece of functionality that would find the particular tyres you required by simply typing in you car registration number. This was done by querying a database that eBay had set up with all the different tyre and car varients."
    } // {
    //     id: 4,
    //     paragraph: "Example:"
    // },
    // {
    //     id: 5,
    //     paragraph: "I have also included a couple a landing page and promotional email as examples of other typical pieces of work I would of done on the eBay account."
    // },
    // {
    //     id: 6,
    //     paragraph: "Global shipping programme landing page"
    // },
    // {
    //     id: 7,
    //     paragraph: "<a href='http://portal.ebay.co.uk/gsp' target='_blank' className='lp-link'>Link</a> to landing page"
    // },
    // {
    //     id: 8,
    //     paragraph: "German fashion promotional email"
    // }
    ]
  }, {
    id: 9,
    title: "StubHub",
    url: "/stubhub",
    text: [{
      id: 1,
      paragraph: "During my time at FEED, I was assigned the task of creating a Euro 2016 'wall chart' for StubHub. This was designed to allow users to keep a track of the fixtures and results of the competition, as well as allowing them to buy tickets up to an hour before the game on the StubHub ticket marketplace."
    }, {
      id: 2,
      paragraph: "The website used an external API set up specifically for Euro 2016. This would then populate the project with all the correct data, home team, away team, stadium, kick off date and time, etc. Then once the time had gotten to an hour before keick off the buy and now buttons would be hidden."
    }, {
      id: 3,
      paragraph: "As well as this we ran a cron job every couple of minutes to update the score as if the scores were live, the functionality of the project was built using php and the templates were structured using handlebars.js. This worked fine at the time, however if I were to build this project again today (January 2018) I would almost definitely use react.js as this would eliminate the need to run a cron job on the server every few minutes to update the scores."
    } // {
    //     id: 4,
    //     paragraph: "A screenshot of the finished project can be seen below:"
    // }
    ]
  }, {
    id: 10,
    title: "Kurt Geiger",
    url: "/kurt-geiger",
    text: [{
      id: 1,
      paragraph: "This particular work for Kurt Gieger was landed through a freelance opportunity. I was assined the job of re-working the front end of thier careers section on thier website inline with thier new branding. I was allowed access to this particular area of the repo in order to make the changes."
    }, {
      id: 2,
      paragraph: "The actual task it self was quite straight forward and jut involved me matching the PSD's provided to to front end but at the time I was thrilled to work with such a huge company such as Kurt Geiger and promptly completed the task well within the deadline and to a very high standard where all involved were very happy with the end product."
    }]
  }, {
    id: 11,
    title: "Shell",
    url: "/shell",
    text: [{
      id: 1,
      paragraph: "During my time at Freedman International I worked extensively on the Shell account. The project that I was most pleased to work on with this account was the marketing campaign around the introduction of their QR codes. Basically what they wanted from this particular roject was for the user to recieve an email, then from there they would click through onto a landing page with a promotional video explaing how to use the QR codes to the user."
    }, {
      id: 2,
      paragraph: "I was tasked with both the build of the HTML emails (5 in total) and the production of the promotional video using the footage they had supplied. The HTML email builds were no problem, they we completed fairly quickly. Although, as a relative video editing novice I found the production of said video far more challenging."
    }, {
      id: 3,
      paragraph: "However, the video was eventually produced on time and to the satisfaction of the client, as well as this the campaign was a success and I learned a fair bit about various editing techniques after being taken well out of my comfort zone with the video production."
    }]
  }, {
    id: 12,
    title: "Tradefair",
    url: "/tradefair",
    text: [{
      id: 1,
      paragraph: "During my time at London Capital Group, I was assigned the task of re-working Tradefair's (a client of London Capital Groups) online application form for their live and demo trading accounts. This task was Front End focused, it involved me taking a pre-existing design produced by a Graphic designer and turning that into complicit clean and tidy code. The application form interacted with the live and demo accounts databases so I had to be very aware of this while making any changes to the mark up and styling."
    }, {
      id: 2,
      paragraph: "The project turned out to be a big success, was delivered to the clients satisfaction and within the delivery deadline. Although the branding and styling has changed since I completed this project in 2010, you can see here that the application form I worked on is still used today."
    }]
  }, {
    id: 13,
    title: "BetVictor",
    url: "/betvictor",
    text: [{
      id: 1,
      paragraph: "Whislt at London Capital Group, I was assigned the task of re-working BetVictor's (a client of London Capital Groups) look and feel to thier trading website. This task was obviously front end focused, it involved me taking a pre-existing design produced by a Graphic designer and turning that into complicit clean and tidy code."
    }, {
      id: 2,
      paragraph: "BetVictor's website was CMS driven (Drupal) and I was given a large say in the look and feel of the website we produced, particularaly during the re-design process, which I was heavily involved in, with the implimentation of the new front end and UX of the website."
    }, {
      id: 3,
      paragraph: "The project turned out to be a big success as well as being delivered on time, the client was very happy with the end product."
    }]
  }, {
    id: 14,
    title: "LCG",
    url: "/lcg",
    text: [{
      id: 1,
      paragraph: "My main responsibility at London Capital Group was the conversion of static HTML websites into CMS (Drupal) driven websites, completing full build from start to finish. I was responsible for the build of various microsites and email campaigns for external and internal marketing teams. Again I was responsible for working on the development of the numerous internal tools used for communication between the IT support team and Development team, for example the bug logging and ticketing system we used, as well as writing applications to automate different tasks performed by the support team to streamline the process as much as possible, for example the implementation of the live chat functionality for communication with clients across the business. London Capital Group operates within an agile environment; working at the company for four years, this methodology is something I am well versed in having been exposed to."
    }]
  }, {
    id: 15,
    title: "The Smalls",
    url: "/the-smalls",
    text: [{
      id: 1,
      paragraph: "My core responsibility was to look after the day to day running of The Smalls Website. In this varied role I was exposed to all types of development work as I was the sole internal developer at the company."
    }, {
      id: 2,
      paragraph: "I primary worked on the front end of the website but also experienced working on server side technologies, from database administration using MySQL to full on server migration whilst working at The Smalls."
    }, {
      id: 3,
      paragraph: "The Smalls website was CMS driven (Drupal) and I was given a large say in the look and feel of the website we produced, particularaly when The Smalls went through a re-design process, which I was heavily involved in, with the implimentation of the new front end and UX of the website."
    }, {
      id: 4,
      paragraph: "I was als responsible for writing documentation and bug fixing. This role was predominantly web based but I developed applications and tools for internal use as well."
    }]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.status(200).json(portfolio);
});

/***/ }),

/***/ 10:
/*!*******************************************!*\
  !*** multi ./pages/api/REST/portfolio.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameswaller/2020-portfolio/pages/api/REST/portfolio.js */"./pages/api/REST/portfolio.js");


/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map