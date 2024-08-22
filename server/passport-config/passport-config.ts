const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const process_passport = require("process");

const GOOGLE_CLIENT_ID = process_passport.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process_passport.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(
        "\x1b[41m%s\x1b[0m",
        "GOOGLE_CLIENT_ID: ",
        GOOGLE_CLIENT_ID,
        "GOOGLE_CLIENT_SECRET: ",
        GOOGLE_CLIENT_SECRET
      );
      console.log(
        "passport-congif: ",
        accessToken,
        refreshToken,
        profile,
        done
      );
      // Handle the authenticated user profile
      // You can store user information in a database or session
      // done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Retrieve user information from the database or session
  // Replace with your actual user retrieval logic
  done(null, { id });
});

module.exports = passport;
