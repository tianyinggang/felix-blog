import { useEffect, useRef } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ProvideFilter } from "context/filter";
import { SectionProvider } from "@/lib/context/SectionProvider";

import "../styles/globals.css";

import gsap from "gsap";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 });
    };

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mousedown", hideCursor);
      document.removeEventListener("mouseup", showCursor);
    };
  }, []);

  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        ref={cursorRef}
        className="hidden lg:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
      />
      <ThemeProvider attribute="class">
        <ProvideFilter>
          <SectionProvider>
            <Component {...pageProps} />
          </SectionProvider>
        </ProvideFilter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
