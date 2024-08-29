// src/pages/api/authenticate.ts

import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

interface AuthenticateRequest {
  userEmail: string;
  password: string;
}

export async function POST(
  req: NextRequest,
  { params }: { params: { userEmail: string; password: string } },
  res: NextResponse
) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      if (!body.userEmail || !body.password) {
        return NextResponse.json(
          { message: 'Invalid Request' },
          { status: 400 }
        );
      }
      const postParams: AuthenticateRequest = {
        userEmail: body.userEmail,
        password: body.password
      };
      const response = await fetch(
        'https://JSONPLACEHOLDER/typicode.com/users',
        {
          method: 'GET'
          // headers: {
          //   'Content-Type': 'application/json'
          // }
          // body: JSON.stringify(postParams)
        }
      );

      const data = await response.json();
      return NextResponse.json(data, { status: Number(res.status) });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  } else {
    return NextResponse.json(
      { message: 'Method Not Allowed' },
      { status: 405 }
    );
  }
}
