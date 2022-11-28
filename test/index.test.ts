import { SendGrid, ISendGrid } from '../src/modules/send-grid';

describe('Send Grid Platform API', () => { 
    let sendGrid: ISendGrid;
    beforeAll(() => {
        sendGrid = new SendGrid();
    });

    it('Test send mail with SendGrid', async () => {
        const result = await sendGrid.sendMail({
            to: 'anhhuy9900@yopmail.com',
            from: 'nhahuy19900@gmail.com',
            subject: 'Test send mail SendGrid',
            text: 'Test send mail SendGrid',
            html: ''
        });
        expect(result).toBeTruthy();
    })
});