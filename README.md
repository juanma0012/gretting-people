## Greetings People App
This app was created using React.js and Redux libraries, following the Flux architecture to make the state immutable. Dispatching actions, handle the new data and after that, storing the new state in an unique store.
Into the /components folder contains as the name says, the components for this app, each component is created with actions, reducer, css styles, view elements and business logic.

The app is already running in [https://juanma0012.github.io/gretting-people](https://juanma0012.github.io/gretting-people).

On this repository you'll find the following folders structure:
~~~
├── App.js
├── app.css
├── components
│   ├── GreetingList
│   │   ├── GreetingItem.js
│   │   ├── GreetingList.js
│   │   ├── actionTypes.js
│   │   ├── actions.js
│   │   ├── greetingList.css
│   │   ├── reducer.js
│   │   └── tests
│   │       ├── GreetingList.test.js
│   │       ├── __snapshots__
│   │       │   └── GreetingList.test.js.snap
│   │       └── reducer.test.js
│   ├── LanguageDropdown
│   │   ├── LanguageDropdown.js
│   │   ├── actionTypes.js
│   │   ├── actions.js
│   │   ├── languageDropdown.css
│   │   ├── reducer.js
│   │   └── tests
│   │       ├── LanguageDropdown.test.js
│   │       ├── __snapshots__
│   │       │   └── LanguageDropdown.test.js.snap
│   │       └── reducer.test.js
│   ├── PeopleForm
│   │   ├── PeopleForm.js
│   │   ├── actionTypes.js
│   │   ├── actions.js
│   │   ├── peopleForm.css
│   │   ├── reducer.js
│   │   └── tests
│   │       ├── PeopleForm.test.js
│   │       ├── __snapshots__
│   │       │   └── PeopleForm.test.js.snap
│   │       └── reducer.test.js
│   └── index.js
├── index.css
├── index.js
├── logo.svg
├── reducer.js
├── serviceWorker.js
├── setupTests.js
├── shared
│   └── utility.js
└── tests
    ├── App.test.js
    └── __snapshots__
        └── App.test.js.snap
~~~

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`
Install all the dependencies in the app

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run lint`
Verify the syntax in the code in accordance to defined rules.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
But for this project, the app is built in the `docs` folder to deploy to github pages.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
