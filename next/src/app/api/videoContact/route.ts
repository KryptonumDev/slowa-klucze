import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import localeData from 'dayjs/plugin/localeData';
import { regex } from '@/global/constants';
import { domain } from '@/global/Seo';
import { removeHtmlTags } from '@/utils/functions';

dayjs.extend(localeData);
dayjs.locale('pl');

const resend = new Resend(process.env.RESEND_API_KEY);

const apiToken = process.env.CALENDLY_API_KEY;

const emailData = {
  from: 'Kamila Wrzask <kontakt@slowa-klucze.pl>',
  to: 'Kamila Wrzask <kontakt@slowa-klucze.pl>',
};

const headers = {
  Authorization: `Bearer ${apiToken}`,
  'Access-Control-Allow-Origin': domain,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST',
};

type Req = {
  email: string;
  legal: boolean;
  date: string;
};

export async function POST(request: Request): Promise<Response> {
  const req = (await request.json()) as Req;
  const { email = '', legal = false, date }: { email: string; legal: boolean; date: string } = req;

  if (!regex.email.test(email.toLowerCase()) || !legal || !date) {
    return NextResponse.json({ success: false }, { status: 422, headers });
  }

  const dayjsDate = dayjs(date);

  const body = `
  <p> E-mail: <b>${email}</b></p>
  <p> Czas: <b>${dayjsDate.format('dddd, D MMMM, HH:mm YYYY')}</b></p>
  <br />
  <br />
  <p><em>Wyrażono zgodę na politykę prywatności</em></p>`;

  try {
    await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `Wiadomość z rozmowy wideo`,
      html: body,
      text: removeHtmlTags(body),
    });
    return NextResponse.json({ success: true }, { status: 200, headers });
  } catch {
    return NextResponse.json({ success: false }, { status: 500, headers });
  }
}
