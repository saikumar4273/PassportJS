const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
    passport.use(new TwitterStrategy({
        consumerKey: '',
        consumerSecret: '',
        callbackURL: '',
        passReqToCallback: true
    },
    function(req, token, tokenSecret, profile, done) {
        const user = {};
        //   user.email = profile.emails[0].value;
          user.image = profile._json.picture;
          user.displayName = profile.displayName;
          user.google = {};
          user.google.id = profile.id;
          user.google.token = token;  
          done(null, user);
    }
))
}