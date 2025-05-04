import { SESClient, CloneReceiptRuleSetCommand } from '@aws-sdk/client-ses';
import { AWS_ENV_REGION, AWS_ENV_ACCESS_KEY_ID, AWS_ENV_SECRET_ACCESS_KEY } from '../../config';
import { IAWS_SES } from './ses.interface';

class AWS_SES implements IAWS_SES {
    private ses: SESClient;

    constructor() {
        this.ses = new SESClient({ 
            region: AWS_ENV_REGION,
            credentials: {
                accessKeyId: AWS_ENV_ACCESS_KEY_ID,
                secretAccessKey: AWS_ENV_SECRET_ACCESS_KEY
            }
        });
    }

    private createParams(input: any): CloneReceiptRuleSetCommand {
        return new CloneReceiptRuleSetCommand(input);
    }

    public async sendMail(params: any): Promise<Record<string, any>> {
        const paramsToSend = this.createParams(params);
        return await this.ses.send(paramsToSend).catch(err => {
            console.log('AWS_SES - ERROR: ', err);
            return err;
        });
    }
}

export default AWS_SES;