import passport from "passport";

export default async function handler(req, res) {
  passport.authenticate(
    "google",
    { failureRedirect: "/login" },
    (err, user, info) => {
      if (err) {
        return res.status(400).json({ error: "Login failed" });
      }
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      console.log("login-with-google: ", user, info);
      // Handle the authenticated user
      // You can store user information in a session or database
      // req.session.user = user;
      // res.redirect("/profile");
    }
  )(req, res);
}
