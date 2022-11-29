import {
  SendGrid,
  ISendGrid,
  SendGridSendMailParams,
} from './modules/send-grid'
import { Mailer } from './modules/mailer'
import { IMailer } from './modules/mailer/mailer.interface'
import { AWS_SES } from './modules/aws-ses'
import { MailerClient } from './modules/main'

export {
  SendGrid,
  ISendGrid,
  SendGridSendMailParams,
  Mailer,
  IMailer,
  AWS_SES,
  MailerClient,
}
