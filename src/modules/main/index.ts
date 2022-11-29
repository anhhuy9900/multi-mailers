import { IBaseMailer } from './base-mailer.interface'

export class MailerClient {
  constructor(private readonly client: IBaseMailer) {}

  async send(params: any): Promise<void> {
    await this.client.sendMail(params)
  }
}
