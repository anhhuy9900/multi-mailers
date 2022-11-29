import { ISendGrid, SendGridSendMailParams } from './send-grid.interface';
declare class SendGrid implements ISendGrid {
    constructor();
    sendMail(mail: SendGridSendMailParams): Promise<Record<string, any>>;
}
export default SendGrid;
