# tvshow Application with Vuejs
This web application which allows users to get details of their favourite TV-shows. 
The application makes use of open api: https://www.tvmaze.com/api to get the relevent data from the server.
On the Home page, it loads top Trending shows ordered by average rating and shows based on genres.  
On clicking the desired show, the user can view the details of the particular show.
The user can use the search option from top header to search for any particular show.

The details of that tvshow:
• Overview : name, poster of show, ratings, genres,summary of the show and premiered
• Cast : photo, name of the artist, name of the character, image of the artist.

## Installations
## Vue CLI
```
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion refer the following pages.

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines ------------

1) Method Naming Convention, 
   variable, object declaration : camelCase
   Example : tvShowInfo, viewDetails() etc..

2) Folder, Js files Naming Convention: lowercase
   Example :  tvshow.service.js, index.js , showsearch.spec.js

3) Vue files Naming Convention, component names : PascalCase
   Example : AppHeader.vue 
 

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. BootstrapVue:
   BootstrapVue is popular framework for building responsive, mobile-first sites using Vue js
   Please refer below url for more details:
   https://bootstrap-vue.org/

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, 
   coverageThreshold,etc for getting exact code coverage with reports.
