// dependencies
require("dotenv").config()
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection')
// const exphbs = require('express-handlebars');

// const helpers = require('/utils/helpers');
// const session = require('express-session');

//Set up the Express App
const app = express();
const PORT = process.env.PORT || 7777;

// const hbs = exphbs.create({ });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');



//set up Handlebarjs.js engine as default template engine

// const sess = {
//     secret: 'secret notes',
//     cookie: {},
//     resave: false,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//start the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});