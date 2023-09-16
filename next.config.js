/** @type {import('next').NextConfig} */
const config = require("./config");
const nextConfig = {
  env: {
    DB_URI: config.DB_URI,
    API_URL: config.API_URL,
    SECRET_KEY: config.SECRET_KEY,
    EXPAIRATION: config.EXPAIRATION,
    ISSUER: config.ISSUER,
  },
};

module.exports = nextConfig;
