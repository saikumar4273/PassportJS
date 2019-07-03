const passport = require('passport');
const FacebooktStrategy = require('passport-facebook').Strategy;

module.exports = () => {
    passport.use(new FacebooktStrategy({
        clientID: '708534456272549',
        clientSecret: '79c621bc96c69c57837861e2142f557e',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
        const user = {};
        //   user.email = profile.emails[0].value;
        //   user.image = profile._json.picture;
          user.displayName = profile.displayName;
          user.facebook = {};
          user.facebook.id = profile._json.id;
          user.facebook.token = accessToken;  
          done(null, user);
    }
))
}