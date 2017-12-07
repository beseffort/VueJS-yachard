# [wp-node](https://github.com/Orthodox-Union/wp-node)

> An offline-first SPA using Vue.js, the WordPress REST API and Progressive Web Apps

Live version: [http://web1.wp-node.aws.oustatic.com](http://web1.wp-node.aws.oustatic.com/)

## Description

Since WordPress can expose a REST API, this project uses Vue.js, Vue-router, Vuex, Vue-resource & Progressive Web App techniques to create an offline-first web client.

## Getting Started

### Prerequisites

Make sure that [Node v7](https://nodejs.org/en/download/releases/) is installed.

## Features

- Modern JavaScript syntax with [ES6](https://github.com/lukehoban/es6features) via [babel](https://babeljs.io/).
- Module bundler via [webpack](https://webpack.github.io/).
- Components-based architecture via [Vue.js](https://vuejs.org/).
- State management via [Vuex](https://vuex.vuejs.org/en/).
- Cache busting via [file-loader](https://webpack.github.io/)
- Progressive Web App enabled with [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
- Offline capable with [service workers, app cache](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
- CSS with [Sass](http://sass-lang.com/)
- Router via [Vue-router](https://github.com/vuejs/vue-router)
- Web requests via [Vue-resource](https://github.com/pagekit/vue-resource)

### Instructions

First, install the WordPress plugins to enhance its REST API

- Better REST API Featured Images
- Category Order
- REST API Enabler
- WP REST API - filter fields
- WP REST API - Pure Taxonomies
- WP REST API Menus
- WP-CORS

Then, clone the repo or create a fork

```bash
$ git clone https://github.com/Orthodox-Union/wp-node.git
```

Then, edit the config:

```bash
src/app.config.js
```

Then, edit the theme, routes and assets:

```bash
src/theme/
src/assets
```

Finally, to run the project for development with hot reload:

```bash
$ npm install
$ npm run dev
```

Or, build the project for production:

```bash
$ npm run build
```

### Deployment


### License

Private
