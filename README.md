# Personio test assignment

An application consisting of a table with data and client side filtering and sorting. URL contains the information
about filtering and soring

I jotted down some of my thoughts on design decisions made in the `NOTE:` comments throughout the code
and in sections down below, as well as information about bootstraping the application.
I hope you'll enjoy reviewing this application as much as I enjoyed devising it ;)

## Technologies used:

- Create React App
- React
- TypeScript
- Redux-Toolkit (includes RTKQuery, Immer, etc.)
- Material UI
- Jest + react-testing-library

## About requirements and compromises made

Requirements can be found in a pdf file in the root of the repository

I did not make a note of a time I spent creating this application, but I can say that I spent both weekend evenings building this,
so I believe, it falls within the requirement of timeboxing a solution to 6 hours (roughly). The solution I made is
not ideal but, I think, it works well, although I would hone it a little bit more. There are some points requiring the improvement.

I took a liberty in using a component library (MUI) for pretty-looking styled reusable components, so that
I could focus more on the logical and architectural part and think a little bit less about UI/UX design.
I don't see any contradictions with the requirements in this respect, I didnt' use any list-rendering libraries
such as "react-table" or any components that include list rendering or sorting-filtering logic from MUI, only
plain UI components (and I also used Grid, which is, in essence, a flex container)

The first thing I would improve about this solution is testing. Due to the lack of time all I could do was a
couple of example unit tests that do not cover every component. Also in addition to units I would also
add some integration tests and some E2E (something like selenium) would also be nice to have


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
