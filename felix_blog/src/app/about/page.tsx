import Image from 'next/image';

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Sat Naing, full stack developer and tech enthusiast.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="mb-8 aspect-video relative rounded-lg overflow-hidden">
          <Image
            src="/api/placeholder/1200/600"
            alt="Sat Naing"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose dark:prose-dark max-w-none">
          <p>
            Hello! I'm Sat Naing, a passionate full-stack developer with a
            focus on creating clean, user-friendly web applications. I have
            experience working with modern web technologies like React, Next.js,
            and TypeScript.
          </p>
          
          <h2>My Journey</h2>
          <p>
            I started my programming journey in 2015, and since then I've
            worked on a variety of projects, from small business websites to
            complex web applications. I'm constantly learning and expanding my
            skillset to stay up-to-date with the latest technologies and best
            practices.
          </p>
          
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> React, Next.js, TypeScript, TailwindCSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express, MongoDB, Firebase
            </li>
            <li>
              <strong>Tools:</strong> Git, Docker, AWS
            </li>
            <li>
              <strong>Other:</strong> UI/UX Design, Technical Writing
            </li>
          </ul>
          
          <h2>Outside of Coding</h2>
          <p>
            When I'm not coding, you can find me reading books, exploring
            nature, or experimenting with photography. I also enjoy writing
            about technology and sharing my knowledge through my blog.
          </p>
        </div>
      </div>
    </div>
  );
}