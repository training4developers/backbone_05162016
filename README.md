# Welcome to TechStars Node/Backbone!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:
- Monday - Thursday - 9:30am to 4:30pm

Breaks:
- Morning: 10:50am - 11:00am
- Lunch: 12:15pm to 1pm
- Afternoon #1: 2:05pm-2:15pm
- Afternoon #2: 3:20pm-2:30pm

## Course Outline

- Day 1 - Backbone/Marionette
- Day 2 - Backbone/Marionette
- Day 3 - Node/Hapi/SocketIO
- Day 4 - SocketIO/Unit Testing/React

## Links

### Course Resources

- [Backbone.js](http://backbonejs.org/)
- [Underscore.js](http://underscorejs.org/)
- [Lodash](https://lodash.com/)
- [Marionette](http://marionettejs.com/)
- [Node.js](https://nodejs.org/en/)
- [Hapi](http://hapijs.com/)
- [Socket.io](http://socket.io/)
- [Jasmine](http://jasmine.github.io/)
- [Karma](https://karma-runner.github.io/0.13/index.html)

### Instructor's Resources

- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [React Blog Posts](https://github.com/training4developers/react-flux-blog)
- [TopTal Angular Directive](https://www.toptal.com/angular-js/angular-js-demystifying-directives)
- [TopTal JavaScript Videos](https://www.toptal.com/videos)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)

### Other Resources

- [DevelopIntelligence](http://www.developintelligence.com/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)

## Setup Instructions

Prerequisites: [Node.js](https://nodejs.org/en/) (version 4 or later) and [Git](https://git-scm.com/) need to be installed, if they are not already

Step 1: Using Git, clone the class repository: https://github.com/training4developers/backbone_05162016.git

Step 2: From the terminal, change to the repository folder.

Step 3: From the terminal, run the following commands:

```bash
$ npm i

$ npm i -g gulp grunt-cli eslint eslint-plugin-react webpack babel-eslint karma-cli

$ grunt
```
This project supports both Grunt and Gulp. If you prefer to use Gulp, then substitute 'gulp' the last 'grunt' command above.

Step 4: Open a new terminal window, change to the project folder.

Step 5: From the terminal, run the following command:

```bash
$ grunt server
```
This project supports both Grunt and Gulp. If you prefer to use Gulp, then substitute 'gulp' for 'grunt' in the above command.

Step 6: Open a web browser, and navigate to http://localhost:3000

Step 7: To start Karma, open a new terminal, then run the following command.

```bash
$ karma start karma.conf.js
```

Karma will run an instance of Chrome which is where the unit tests are executed. The output of the tests will be to the terminal window.
