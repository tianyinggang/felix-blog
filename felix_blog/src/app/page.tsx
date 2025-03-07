import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { allBlogs, allProjects } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { formatDate } from '@/lib/utils';
import { ThemeSwitch } from '@/components/theme-switch';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Home() {
  const latestPosts = allBlogs
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  const featuredProjects = allProjects
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-10 border-b bg-light/80 backdrop-blur dark:bg-dark/80 dark:border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            Sat Naing
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-primary-700 dark:hover:text-primary-400">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary-700 dark:hover:text-primary-400">
              Blog
            </Link>
            <Link href="/projects" className="hover:text-primary-700 dark:hover:text-primary-400">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-primary-700 dark:hover:text-primary-400">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            <Button variant="outline" className="hidden md:inline-flex">
              Resume
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Hi, I'm <span className="text-primary-700 dark:text-primary-400">Sat Naing</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                  A Full Stack Developer passionate about creating clean, user-friendly experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button as={Link} href="/contact">
                    Get in Touch
                  </Button>
                  <Button variant="outline" as={Link} href="/projects">
                    View Projects
                  </Button>
                </div>
                <div className="flex mt-8 space-x-4">
                  <a href="https://github.com/satnaing" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6 text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-400" />
                  </a>
                  <a href="https://linkedin.com/in/satnaing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-400" />
                  </a>
                  <a href="https://twitter.com/satnaing" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-6 w-6 text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-400" />
                  </a>
                  <a href="mailto:contact@satnaing.dev" aria-label="Email">
                    <Mail className="h-6 w-6 text-gray-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-400" />
                  </a>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto rounded-full overflow-hidden border-4 border-primary-700 dark:border-primary-400">
                  <Image 
                    src="/api/placeholder/400/400" 
                    alt="Sat Naing" 
                    fill 
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Recent Blog Posts</h2>
              <Link href="/blog" className="text-primary-700 dark:text-primary-400 hover:underline">
                View all posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
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
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary-700 dark:hover:text-primary-400">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Link href="/projects" className="text-primary-700 dark:text-primary-400 hover:underline">
                View all projects →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <article key={project.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={project.url}>
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/api/placeholder/600/400"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary-700 dark:hover:text-primary-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Sat Naing</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Full Stack Developer
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-semibold mb-2">Links</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Social</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="https://github.com/satnaing" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/satnaing" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/satnaing" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Sat Naing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}