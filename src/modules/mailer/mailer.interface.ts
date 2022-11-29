import { IBaseMailer } from '../main/base-mailer.interface'
import { TransportOptions } from 'nodemailer'

export interface IMailer extends IBaseMailer {}

export interface MailerTransporterOption extends TransportOptions {
  service?: string | undefined
  host?: string | undefined
  port?: string | undefined
  auth: {
    user: string
    pass: string
  }
}
