# Javascript-Projects

Repository for Javascript Projects.

## Usage

## List of Projects

### CRUD using pure Javascript

- <https://www.youtube.com/watch?v=-rNQeJi3Wp4&t=207s>

### MERN CRUD website

- <https://youtube.com/watch?v=HuXBuXf52vA>

npm packages:

`mern-stack-api`

- Express.js (for router)
- Mongoose (For MongoDB)
- body-parser (For JSON)
- cors ()
- nodemon (Installed globally, doesn't work when installed locally)

`mern-stack-client`

- create-react-app (for `npx create-react-app mern-stack-client`)
- redux (for redirects (independent app for state-management inclined applications))
- react-redux (for displaying the redux store into the component/UI)
- redux-thunk (for actions)
- axios (for making http requests at `mern-stack-client/src/actions/api.js`)
- @material-ui/core (for react UI)
- @material-ui/icons (for react UI)
- butter-toast (Notification UI) (not installable, skipped.)

Applications used for Developing:

- MongoDB compass (For Mongo Index GUI)
- postman (For RESTful API application)

To start servers:

reminder for mongoDB: run `nodemon index.js` at `./MERN CRUD/mern-stack-api` to connect to the database.
reminder for react: run `npm start` at `./MERN CRUD/mern-stack-client`to run react server again.

Code structure:

Uses React hooks instead of class components.

reminder for react: All components that refer to postmessages must have a capital first letter.
reminder for processes: Comment all code to record the process and related code.

redux notes:

redux store = storing data insidde credits to state
redux action (redux-thunk) = defining an operation which is to be done on the data that we have saved on the products store program.
redux reducer = update the action dispatched and outputs it into redux store.
