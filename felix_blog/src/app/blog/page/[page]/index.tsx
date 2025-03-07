import Link from 'next/link';
import Image from 'next/image';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => {
  const totalPosts = allBlogs.length;
  const postsPerPage = 9;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
};

export async function generateMetadata({ params }: { params: { page: string } }) {
  return {
    title: `Blog - Page ${params.page}`,
    description: 'Articles and thoughts on web development, design, and more.',
  };
}

export default function BlogPage({ params }: { params: { page: string } }) {
  const postsPerPage = 9;
  const pageNumber = parseInt(params.page);
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }
  
  const sortedPosts = allBlogs
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  if (pageNumber > totalPages) {
    // src/app/blog/page/[page]/page.tsx (继续)
    return notFound();
  }
  
  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={post.url}>
              <div className="aspect-video relative">
                <Image
                  src={post.image || "/api/placeholder/600/400"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {formatDate(post.date)}
                </p>
                <h2 className="text-xl font-semibold mb-2 hover:text-primary-700 dark:hover:text-primary-400">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`/blog/page/${i + 1}`}
              className={`px-4 py-2 rounded ${
                pageNumber === i + 1
                  ? "bg-primary-700 text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900"
              }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}