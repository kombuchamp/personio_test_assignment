# Personio test assignment

An application consisting of a table with data and client side filtering and sorting. There is an ability to persist
filtering and sorting data in a URL and ability to switch theme

I jot down some of my thoughts on design decisions made in the NOTE: comments throughout the code
and in corresponding sections in the readme down below, as well as information about bootstraping the application.
I hope you'll enjoy reviewing this application as much as I enjoyed devising it ;)

## Technologies used:
- Create React App
- React
- TypeScript
- Redux-Toolkit (includes RTKQuery, Immer, etc.)
- Material UI
- Jest + react-testing-library

## About requirements and compromises made

Requirements can be found in a pdf file in the root of repo

I did not mark a time I spent on this application, but I can say that I spent a weekend evenings building this,
so I believe, it falls under requirement of timeboxing a solution to 6 hours (roughly). Solution I made is
not ideal, i think, I would hone it a little bit more, there are points of improvement.

I took a liberty to use a component library (MUI) for pretty-looking styled reusable components, so
I could focus more on logical and architectural part and think a little bit less about UI/UX design.
I don't see any contradictions with the requirements here, I didnt' use any list-rendering libraries
like react table or any components that include list rendering or sorting-filtering logic from MUI, only
plain UI components (and I also used Grid, which is, in essence, a flex container)

First think I would improve about this solution is testing. Due to lack of time all I could do is a
couple of example unit tests that do not cover every component. Also in addition to units I would also
add some integration tests and some E2E (something like selenium) would be also nice to have


## Bootstraping and running the application

Please notice that I put "candidates.json" in a public folder to imitate the server during development
(without errors and lags). To test it against the production server, you'll need to run the production build of the
application.

### Install dependencies
`npm install`

### Run in development mode
`npm start`

### Production build
`npm run build`

### Run in production mode
`npm run start-prod`
