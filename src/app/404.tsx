import type { InferGetStaticPropsType } from "next";
import AppHead from "@/components/AppHead";
import generateMetadata from "@/components/metadata"; // replace AppHead

import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";

import { getAllPosts } from "utils/api";
import { MdxMeta } from "../pages/blog/posts/[slug]";

export const meta = {
  description:
    "Sat Naing is a full-stack developer based in Yangon, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Sat Naing",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  siteName: "Sat Naing",
  imageAlt: "Sat Naing portfolio website",
};

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata() {
  return {
    title: "Sat Naing - A Full-stack Developer",
    description: meta.description,
    openGraph: {
      title: "Sat Naing - A Full-stack Developer",
      description: meta.description,
      url: process.env.NEXT_PUBLIC_URL,
      siteName: meta.siteName,
      images: [
        {
          url: meta.ogImage,
          alt: meta.imageAlt,
        },
      ],
      type: meta.type,
    },
  };
}

export async function getStaticProps() {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
}

export default function Home({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Loader>SatNaing.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
}