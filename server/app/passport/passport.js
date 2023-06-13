const database = require("../models");
const Sequelize = require("sequelize");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configuração da estratégia de autenticação do Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/google/callback'
    },  
    function(
      accessToken, refreshToken, profile, done
  ) {
    //findOne buscando por email
    //Primero debe haber un condicional preguntando si el usuario existe 
    //SI el usario existe logueate, si no crea un nuevo usuario a partir de los datos de google
    // email, role: definir , password
    //Nuevo usario Create
    //Crear uma senha criptografada / hash ... enviar el password por email
    //Enviar enlance para establecer contraseña
    
    console.log(accessToken);
    console.log(profile);
    done(null, profile );
  }
)
);

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})