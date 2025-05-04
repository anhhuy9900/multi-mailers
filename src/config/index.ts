import 'dotenv/config'
export const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY || "";
export const MAILTRAP_HOST: string = process.env.MAILTRAP_HOST || "";
export const MAILTRAP_PORT: string | undefined = process.env.MAILTRAP_PORT;
export const MAILTRAP_USER: string = process.env.MAILTRAP_USER || "";
export const MAILTRAP_PASSWORD: string = process.env.MAILTRAP_PASSWORD || "";

// GMAIL
export const GMAIL_HOST: string = process.env.GMAIL_HOST || "";
export const GMAIL_PORT: string | undefined = process.env.GMAIL_PORT;
export const GMAIL_USER: string = process.env.GMAIL_USER || "";
export const GMAIL_PASSWORD: string = process.env.GMAIL_PASSWORD || "";

//AWS SES
export const AWS_ENV_REGION: string = process.env.AWS_ENV_REGION || "";
export const AWS_ENV_ACCOUNT_ID: string = process.env.AWS_ENV_ACCOUNT_ID || "";
export const AWS_ENV_ACCESS_KEY_ID: string = process.env.AWS_ENV_ACCESS_KEY_ID || "";
export const AWS_ENV_SECRET_ACCESS_KEY: string = process.env.AWS_ENV_SECRET_ACCESS_KEY || "";