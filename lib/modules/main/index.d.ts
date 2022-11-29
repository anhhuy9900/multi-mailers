import { IBaseMailer } from './base-mailer.interface';
declare class MailerClient {
    private readonly client;
    constructor(client: IBaseMailer);
    send(params: any): Promise<void>;
}
export default MailerClient;
