'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        An unexpected error has occurred. We apologize for the inconvenience.
      </p>
      <div className="flex space-x-4">
        <Button onClick={reset}>
          Try again
        </Button>
        <Button variant="outline" as={Link} href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}