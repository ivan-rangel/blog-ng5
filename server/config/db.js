const db_url =
  process.env.API_ENVIRONMENT === 'local' ?
    `mongodb://localhost:27017/${process.env.DB_NAME}` :
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

module.exports = db_url;