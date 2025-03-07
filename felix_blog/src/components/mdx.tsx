'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  Image,
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props} />
      );
    }
    
    if (href?.startsWith('#')) {
      return <a {...props} href={href} />;
    }
    
    return (
      
        target="_blank"
        rel="noopener noreferrer"
        {...props}
        href={href}
      />
    );
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);
  
  return <MDXContent components={components} />;
}