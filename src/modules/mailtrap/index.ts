import { SentMessageInfo, Transporter, SendMailOptions, createTransport } from 'nodemailer';
import { MAILTRAP_HOST, MAILTRAP_PORT, MAILTRAP_USER, MAILTRAP_PASSWORD } from '../../config';
import { IMailTrap } from './mailtrap.interface';

class MailTrap implements IMailTrap {
    constructor(private readonly transporter: Transporter) {
        this.transporter = createTransport({
            host: MAILTRAP_HOST,
            port: MAILTRAP_PORT,
            auth: {
                user: MAILTRAP_USER,
                pass: MAILTRAP_PASSWORD
            }
        });
    }

    public async sendMail(mail: SendMailOptions): Promise<SentMessageInfo> {
        return this.transporter.sendMail(mail).catch(err => {
            console.log('MailTrap - sendMail - ERROR: ', err);
        });
    }
}

export default MailTrap;