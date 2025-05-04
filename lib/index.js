"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerClient = exports.AWS_SES = exports.Mailer = exports.SendGrid = void 0;
const send_grid_1 = require("./modules/send-grid");
Object.defineProperty(exports, "SendGrid", { enumerable: true, get: function () { return send_grid_1.SendGrid; } });
const mailer_1 = require("./modules/mailer");
Object.defineProperty(exports, "Mailer", { enumerable: true, get: function () { return mailer_1.Mailer; } });
const aws_ses_1 = __importDefault(require("./modules/aws-ses"));
exports.AWS_SES = aws_ses_1.default;
const main_1 = __importDefault(require("./modules/main"));
exports.MailerClient = main_1.default;
