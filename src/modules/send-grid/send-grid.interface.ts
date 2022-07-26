export interface SendGridSendMailParams {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
}

export interface ISendGrid {
    send(mail: SendGridSendMailParams): Promise<Record<string, any>>;
}