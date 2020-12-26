const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('/utils/helpers');

const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 7777;

//set up Handlebarjs.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'secret notes',
    cookie: {},
    resave: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
//this is so we just get what we want fromt he answer not everything else
app.use(express.urlencoded({ extended: false }));
//this is so we can get our html css our views to public
app.use(express.static(path.join(__dirname, 'public')));

//so we can guide app through our routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})