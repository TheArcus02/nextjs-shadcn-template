import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-muted-foreground'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button asChild>
            <Link href='/'>Back to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
