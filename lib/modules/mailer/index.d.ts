import { SentMessageInfo, SendMailOptions } from 'nodemailer';
import { IMailer, MailerTransporterOption } from './mailer.interface';
export declare class Mailer implements IMailer {
    private transporter;
    constructor(transporterOptions: MailerTransporterOption);
    sendMail(mail: SendMailOptions): Promise<SentMessageInfo>;
}
