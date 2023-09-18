/** @type {import('next').NextConfig} */
const config = require("./config");
const nextConfig = {
  env: {
    DB_URL: config.DB_URL,
    API_URL: config.API_URL,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    EXPAIRATION: config.EXPAIRATION,
    ISSUER: config.ISSUER,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    GITHUB_ID: config.GITHUB_ID,
    GITHUB_SECRET: config.GITHUB_SECRET,
  },
};

module.exports = nextConfig;
