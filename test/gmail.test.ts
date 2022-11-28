import { Mailer } from '../src/modules/mailer';
import { GMAIL_PASSWORD, GMAIL_USER, GMAIL_HOST, GMAIL_PORT } from '../src/config';

describe('GMAIL Platform API', () => { 
    let mailer: Mailer;
    beforeAll(() => {
        mailer = new Mailer({
            service: 'gmail',
            host: GMAIL_HOST,
            port: GMAIL_PORT,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASSWORD
            },
        });
    });

    it('Test send mail with Gmail', async () => {
        const result = await mailer.sendMail({
            to: 'anhhuy9900@yopmail.com',
            from: 'nhahuy19902@gmaial.com',
            subject: 'Test send mail Gmail',
            text: 'Test send mail Gmail',
            html: ''
        });
        expect(result).toBeTruthy();
    })
});