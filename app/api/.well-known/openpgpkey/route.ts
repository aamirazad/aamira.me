import { NextResponse } from 'next/server';

export async function GET() {
  // Your plain text response
  const responseText = `-----BEGIN PGP PUBLIC KEY BLOCK-----
  
  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
  =TdG1
  -----END PGP PUBLIC KEY BLOCK-----`;

  // Return the response as plain text
  return new NextResponse(responseText, {
    headers: { 'Content-Type': 'text/plain' },
  });
}