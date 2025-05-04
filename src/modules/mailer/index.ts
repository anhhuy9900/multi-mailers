import {
  SentMessageInfo,
  Transporter,
  SendMailOptions,
  createTransport,
} from 'nodemailer'
import { IMailer, MailerTransporterOption } from './mailer.interface'

export class Mailer implements IMailer {
  private transporter: Transporter

  constructor(transporterOptions: MailerTransporterOption) {
    this.transporter = createTransport(transporterOptions)
  }

  public async sendMail(mail: SendMailOptions): Promise<SentMessageInfo> {
    return this.transporter
      .sendMail(mail)
      .then((info) => {
        console.log('Mailer - sendMail - info: ', info)
        return info
      })
      .catch((err) => {
        console.error('Mailer - sendMail - ERROR: ', err)
        throw err
      })
  }
}
