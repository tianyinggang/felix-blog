import { Metadata } from 'next';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for work opportunities or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">
              I'm always open to new opportunities and collaborations. 
              Whether you want to discuss a project or just say hello, 
              feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <a 
                  href="mailto:contact@satnaing.dev" 
                  className="text-primary-700 dark:text-primary-400 hover:underline"
                >
                  contact@satnaing.dev
                </a>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold mb-1">Social</h2>
                <div className="space-y-1">
                  <div>
                    <a 
                      href="https://github.com/satnaing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-700 dark:text-primary-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://linkedin.com/in/satnaing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-700 dark:text-primary-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://twitter.com/satnaing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-700 dark:text-primary-400 hover:underline"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}