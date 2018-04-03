const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

// set up stylesheets
app.use(express.static(__dirname + "/public"));

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});