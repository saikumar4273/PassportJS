const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = () => {
    passport.use(new GoogleStrategy({
        clientID: '783553280053-d50gjc4unvfa5v0ktf0j3jtlita48nuf.apps.googleusercontent.com',
        clientSecret: 'kwQ2BBplLDMEx2hijVENgzHe',
        callbackURL: 'http://localhost:3000/auth/google/callback'
      },
        function (req, accessToken, refreshToken, profile, done) {
          const user = {};
          user.email = profile.emails[0].value;
          user.image = profile._json.picture;
          user.displayName = profile.displayName;
          user.google = {};
          user.google.id = profile.id;
          user.google.token = accessToken;  
          done(null, user);
        }
      ))
}
