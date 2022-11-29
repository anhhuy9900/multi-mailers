"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailer = void 0;
const nodemailer_1 = require("nodemailer");
class Mailer {
    transporter;
    constructor(transporterOptions) {
        this.transporter = (0, nodemailer_1.createTransport)(transporterOptions);
    }
    async sendMail(mail) {
        return this.transporter.sendMail(mail).then(info => {
            console.log('Mailer - sendMail - info: ', info);
            return info;
        }).catch(err => {
            console.error('Mailer - sendMail - ERROR: ', err);
            throw err;
        });
    }
}
exports.Mailer = Mailer;
