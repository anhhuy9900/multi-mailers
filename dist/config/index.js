"use strict";
exports.__esModule = true;
exports.AWS_ENV_SECRET_ACCESS_KEY = exports.AWS_ENV_ACCESS_KEY_ID = exports.AWS_ENV_ACCOUNT_ID = exports.AWS_ENV_REGION = exports.GMAIL_PASSWORD = exports.GMAIL_USER = exports.GMAIL_PORT = exports.GMAIL_HOST = exports.MAILTRAP_PASSWORD = exports.MAILTRAP_USER = exports.MAILTRAP_PORT = exports.MAILTRAP_HOST = exports.SENDGRID_API_KEY = void 0;
require("dotenv/config");
exports.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
exports.MAILTRAP_HOST = process.env.MAILTRAP_HOST || "";
exports.MAILTRAP_PORT = process.env.MAILTRAP_PORT;
exports.MAILTRAP_USER = process.env.MAILTRAP_USER || "";
exports.MAILTRAP_PASSWORD = process.env.MAILTRAP_PASSWORD || "";
// GMAIL
exports.GMAIL_HOST = process.env.GMAIL_HOST || "";
exports.GMAIL_PORT = process.env.GMAIL_PORT;
exports.GMAIL_USER = process.env.GMAIL_USER || "";
exports.GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || "";
//AWS SES
exports.AWS_ENV_REGION = process.env.AWS_ENV_REGION || "";
exports.AWS_ENV_ACCOUNT_ID = process.env.AWS_ENV_ACCOUNT_ID || "";
exports.AWS_ENV_ACCESS_KEY_ID = process.env.AWS_ENV_ACCESS_KEY_ID || "";
exports.AWS_ENV_SECRET_ACCESS_KEY = process.env.AWS_ENV_SECRET_ACCESS_KEY || "";
