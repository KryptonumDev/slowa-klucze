import { NextResponse } from 'next/server';
//import { Resend } from 'resend';
import { regex } from '@/global/constants';
import { domain } from '@/global/Seo';

//const resend = new Resend(process.env.RESEND_API_KEY);

const emailData = {
  from: 'Kamila Wrzask <kontakt@slowa-klucze.pl>',
  to: 'Kamila Wrzask <kontakt@slowa-klucze.pl>',
};

const headers = {
  'Access-Control-Allow-Origin': domain,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST',
};

export async function POST(request) {
  const req = await request.json();
  const { email = '', legal = false } = req;

  if (!regex.email.test(email.toLowerCase()) || !legal) {
    return NextResponse.json({ success: false }, { status: 422, headers });
  }

  const body = `
  <p>E-mail: <b>${email}</b></p>
  <br />
  <br />
  <p><em>Wyrażono zgodę na politykę prywatności</em></p>`;

  try {
    // await resend.emails.send({
    //   from: emailData.from,
    //   reply_to: email,
    //   to: emailData.to,
    //   subject: `Wiadomość z newslettera`,
    //   html: body,
    //   text: removeHtmlTags(body),
    // });
    return NextResponse.json({ success: true }, { status: 200 }, { headers });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 }, { headers });
  }
}
