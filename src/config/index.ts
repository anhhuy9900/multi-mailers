import 'dotenv/config'
export const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY || "";
export const MAILTRAP_HOST: any = process.env.MAILTRAP_HOST || "";
export const MAILTRAP_PORT: any = process.env.MAILTRAP_PORT;
export const MAILTRAP_USER: string = process.env.MAILTRAP_USER || "";
export const MAILTRAP_PASSWORD: string = process.env.MAILTRAP_PASSWORD || "";

//AWS SES
export const AWS_ENV_REGION: string = process.env.AWS_ENV_REGION || "";
export const AWS_ENV_ACCOUNT_ID: string = process.env.AWS_ENV_ACCOUNT_ID || "";
export const AWS_ENV_ACCESS_KEY_ID: string = process.env.AWS_ENV_ACCESS_KEY_ID || "";
export const AWS_ENV_SECRET_ACCESS_KEY: string = process.env.AWS_ENV_SECRET_ACCESS_KEY || "";