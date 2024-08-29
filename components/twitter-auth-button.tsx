'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';
import { Icons } from './icons';

export default function TwitterSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() => signIn('twitter', { callbackUrl: callbackUrl ?? '/ec' })}
    >
      <Icons.twitter className="mr-2 h-4 w-4" />
      Continue with Twitter
    </Button>
  );
}
