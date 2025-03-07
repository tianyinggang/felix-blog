import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export const generateStaticParams = () => {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  
  if (!post) {
    return notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Published on {formatDate(post.date)}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          {post.image && (
            <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div className="prose dark:prose-dark max-w-none">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </div>
  );
}