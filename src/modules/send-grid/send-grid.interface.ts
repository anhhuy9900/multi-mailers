import { IBaseMailer } from '../main/base-mailer.interface';
export interface SendGridSendMailParams {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
}

export interface ISendGrid extends IBaseMailer {
    sendMail(mail: SendGridSendMailParams): Promise<Record<string, any>>;
}