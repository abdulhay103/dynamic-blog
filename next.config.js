/** @type {import('next').NextConfig} */
const config = require("./config");
const nextConfig = {
  env: {
    DB_URL: config.DB_URL,
    API_URL: config.API_URL,
    SECRET_KEY: config.SECRET_KEY,
    EXPAIRATION: config.EXPAIRATION,
    ISSUER: config.ISSUER,
  },
};

module.exports = nextConfig;
