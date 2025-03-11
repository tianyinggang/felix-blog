import React from "react";
import { socialLinks } from "@/components/SocialData";

type Props = {
  noPadding?: boolean;
};

const Footer: React.FC<Props> = ({ noPadding = false }) => {
  return (
    <footer
      className={[
        noPadding ? "pb-4" : "pb-24",
        "md:pb-4 text-center mt-auto",
      ].join(" ")}
      aria-label="Footer"
    >
      <div className="flex justify-center space-x-12 mb-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            title={social.title}
            className="transform scale-150 md:scale-125 link-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.svg}
          </a>
        ))}
      </div>
      <div>
        Coded with <span className="sr-only">love</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-1 inline-block fill-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        by Sat Naing
      </div>
    </footer>
  );
};

export default Footer;
