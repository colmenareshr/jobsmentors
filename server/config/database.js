require('dotenv').config();

module.exports= { 
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST, 
  dialect: process.env.DB_DIALECT, 
  port : process.env.DB_PORT, 
  
  
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
}

