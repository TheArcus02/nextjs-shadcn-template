'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary'>Error</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl'>
          Something went wrong.
        </h1>
        <p className='mt-6 text-base leading-7 text-muted-foreground'>
          Sorry, something went wrong. Try again later.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link href='/' className={buttonVariants({ variant: 'default' })}>
            Back to home page
          </Link>
          <Button onClick={() => reset()} variant='outline'>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
