"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_ses_1 = require("@aws-sdk/client-ses");
const config_1 = require("../../config");
class AWS_SES {
    ses;
    constructor() {
        this.ses = new client_ses_1.SESClient({
            region: config_1.AWS_ENV_REGION,
            credentials: {
                accessKeyId: config_1.AWS_ENV_ACCESS_KEY_ID,
                secretAccessKey: config_1.AWS_ENV_SECRET_ACCESS_KEY
            }
        });
    }
    createParams(input) {
        return new client_ses_1.CloneReceiptRuleSetCommand(input);
    }
    async sendMail(params) {
        const paramsToSend = this.createParams(params);
        return await this.ses.send(paramsToSend).catch(err => {
            console.log('AWS_SES - ERROR: ', err);
            return err;
        });
    }
}
exports.default = AWS_SES;
