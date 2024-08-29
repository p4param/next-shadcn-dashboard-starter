import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from '@/components/forms/user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        {/* <!-- Background Image --> */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/exp.png)' }}
        />

        {/* <!-- Overlay (if needed) --> */}
        <div className="absolute inset-0 bg-zinc-900 opacity-75" />

        {/* <!-- Top Logo and Title --> */}
        <div className="relative z-20 mb-4">
          <Image
            src="/images/Clientlogo_EXP_Logo_Red_and_White.png"
            alt="EXP-Inc"
            width={150}
            height={1}
          />
          <h1 className="text-1xl mt-2  font-light">
            Integrated Compliance Management System
          </h1>
        </div>

        {/* <!-- Footer --> */}
        <div className="relative z-20 mt-auto ">
          <blockquote className="space-y-2">
            <footer className="text-sm">
              Copyright © 2000 to 2024, Powered by EXP v8.0
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="flex h-full items-center p-4 lg:p-8">
        <div
          className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
          style={{
            padding: '35px',
            border: 'solid 1px rgb(95 83 83 / 25%)',
            borderRadius: '10px',
            boxShadow: '10px 10px 75px  rgb(95 83 83 / 50%)'
          }}
        >
          <div className="flex flex-col justify-center space-y-2 text-center">
            <h1 className="text-2xl font-thin tracking-tight">
              <div className="mb-1 flex justify-center">
                <Image
                  src="/images/exp-logo.png"
                  alt="EXP-Inc"
                  width={110}
                  height={1}
                />
              </div>
              User Sign in
            </h1>
            <p className="text-sm text-muted-foreground">
              {/* Enter your email below to create your account */}
            </p>
          </div>
          <UserAuthForm />
          <div className="flex flex-col justify-center space-y-6 text-center">
            {/* Make separate button for below functionality for sending email */}
            <a
              href="/auth/signup"
              className="text-sm text-primary hover:underline"
            >
              Request your sign in info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
