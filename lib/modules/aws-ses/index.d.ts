import { IAWS_SES } from './ses.interface';
declare class AWS_SES implements IAWS_SES {
    private ses;
    constructor();
    private createParams;
    sendMail(params: any): Promise<Record<string, any>>;
}
export default AWS_SES;
