import { Mailer } from '../src/modules/mailer';
import { MAILTRAP_HOST, MAILTRAP_PORT, MAILTRAP_USER, MAILTRAP_PASSWORD } from '../src/config';

describe('Mailtrap Platform API', () => { 
    let mailer: Mailer;
    beforeAll(() => {
        mailer = new Mailer({
            host: MAILTRAP_HOST,
            port: MAILTRAP_PORT,
            auth: {
                user: MAILTRAP_USER,
                pass: MAILTRAP_PASSWORD
            },
        });
    });

    it('Test send mail with Mailtrap', async () => {
        const result = await mailer.sendMail({
            to: 'anhhuy9900@yopmail.com',
            from: '30a53529fe-9969f5@inbox.mailtrap.io',
            subject: 'Test send mail Mailtrap',
            text: 'Test send mail Mailtrap',
            html: ''
        });
        expect(result).toBeTruthy();
    })
});