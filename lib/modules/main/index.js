"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailerClient {
    client;
    constructor(client) {
        this.client = client;
    }
    async send(params) {
        await this.client.sendMail(params);
    }
}
exports.default = MailerClient;
