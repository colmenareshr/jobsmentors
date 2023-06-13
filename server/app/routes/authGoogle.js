const router = require("express").Router();
const passport = require("passport");

const SERVER_URL = "http://localhost:5173";

router.get("/auth/google", passport.authenticate("google", { scope: ["email","profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: SERVER_URL,        // /dashboard
    failureRedirect: (`/auth/login/failed`), // /login
  })
);

router.get(SERVER_URL, (req, res) => {
  if (req.user) {
    const response = {
        success: true,
        message: "successfull",
        user: res.user.displayName,
        //   cookies: req.cookies
    }
    console.log(response)
    res.status(200).json
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao fazer logout');
    }
    res.clearCookie('connect.sid', { path: '/' });
    res.redirect(`${SERVER_URL}/login`);
  });
});


module.exports = router