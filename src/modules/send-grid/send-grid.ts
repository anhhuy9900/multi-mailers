import sendGrid from '@sendgrid/mail';
import { ISendGrid, SendGridSendMailParams } from './send-grid.interface';
import { SENDGRID_API_KEY } from '../../config';

class SendGrid implements ISendGrid {
  constructor() {
    sendGrid.setApiKey(SENDGRID_API_KEY);
  }

  async send(mail: SendGridSendMailParams): Promise<Record<string, any>> {
    return await sendGrid.send(mail);
  }
}

export default SendGrid;