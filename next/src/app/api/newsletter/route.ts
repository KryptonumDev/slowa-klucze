/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
};

type Req = {
  email: string;
  legal: boolean;
};
type Res = {
  data: {
    email: string;
  };
};

export async function POST(req: any) {
  try {
    const requestBody = await req.json();
    const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
    });
    const responseBody: Res = (await response.json()) as unknown as Res;

    if (responseBody?.data?.email) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false }, { status: 500 });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
