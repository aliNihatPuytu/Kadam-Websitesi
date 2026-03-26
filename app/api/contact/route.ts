import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Gerekli alanlar eksik.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'KADAM Web <noreply@kadaminsaat.com>',
      to: 'info@kadaminsaat.com',
      replyTo: email,
      subject: `Web Sitesi İletişim Formu - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <div style="background: #8C1D18; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Yeni İletişim Mesajı</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">kadaminsaat.com web sitesi formu</p>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 120px;">Ad Soyad</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #2B2B2B;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">E-posta</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2B2B2B;">
                  <a href="mailto:${email}" style="color: #8C1D18; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Telefon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2B2B2B;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px 12px 0; color: #888; font-size: 13px; vertical-align: top;">Mesaj</td>
                <td style="padding: 12px 0; color: #2B2B2B; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 6px; border-left: 3px solid #8C1D18;">
              <p style="margin: 0; font-size: 12px; color: #888;">Bu mesajı yanıtlamak için doğrudan <strong>${email}</strong> adresine reply yapabilirsiniz.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json({ error: 'Mail gönderilemedi.' }, { status: 500 });
  }
}
