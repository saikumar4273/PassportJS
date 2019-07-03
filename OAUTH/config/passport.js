const passport = require('passport');

module.exports = (app) => {
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
})

passport.deserializeUser(function(user, done) {
  done(null, user);
})

require('./strategy/google')();
// require('./strategy/twitter')();
require('./strategy/facebook')();
}