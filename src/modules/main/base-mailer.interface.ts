export interface IBaseMailer {
  sendMail(mail: Record<string, any>): Promise<Record<string, any>>
}
