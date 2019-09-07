# weatherApp

## Starting Up

- Install the node modules: **npm install**
- Start the server: **npm start**

## Directory Structure

The client directory is formatted as below

```bash
.
├── actions
  ├── constants.js
  └── index.js
├── apis
  └── baseUrl.js
├── components
  ├── layout
    ├── CurrentWeather.js
    ├── Spinner.js
    ├── Weather.js
    └── WeatherList.js
  ├── App.js
  └── Header.js
├── reducers
  ├── cityReducer.js
  ├── datasReducer.js
  ├── errorReducer.js
  └── index.js
├── index.js
└── store.js

```

- actions: This directory is use for functions that handle all the action creators.
- apis: This directory is use for storing the base URL for calling apis.
- components: This directory is use for rendering pages.
  - layout: This directory is use for rendering components.
  - App.js: This is the place for handling all components.
  - Header.js: This is the header app bar.
- reducers: This directory is used for dispatching the actions and return the state.
- index.js: This is the source file entry point.
- store.js: This is a redux middleware to communicate between action dispatch and reducer
- Each files within respective directories contain more detailed documentation on their specific role and functions.
