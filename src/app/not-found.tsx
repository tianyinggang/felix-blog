import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Sat Naing - 404 Page Not Found",
  description: "Page Not Found",
  openGraph: {
    title: "Sat Naing - 404 Page Not Found",
    description: "Page Not Found",
    url: process.env.NEXT_PUBLIC_URL,
  },
};

const NotFound = () => {
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark overflow-hidden">
      <div className="h-screen flex flex-col justify-center selection:bg-brandPrimary selection:text-backgroundLight dark:selection:bg-brandAccentLight dark:selection:text-backgroundDark">
        <div className="flex justify-center items-center flex-col mt-auto">
          <h1 className="text-8xl xs:text-9xl font-bold text-brandPrimary dark:text-brandAccentLight">
            404
          </h1>
          <div className="text-lg xs:text-2xl my-2">
            Page Not Found :&apos;&#40;
          </div>
          <div className="max-w-xs text-center mb-10">
            It seems the page you&apos;re looking for does not exist, or there
            might be a typo in the URL.
          </div>
          <div className="flex space-x-4">
            <LinkButton href="/" outline>
              Go back Home
            </LinkButton>
            <LinkButton href="/blog" outline>
              Go to Blog
            </LinkButton>
          </div>
        </div>
        <Footer noPadding />
      </div>
    </div>
  );
};

export default NotFound;
