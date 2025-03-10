import type { Metadata } from "next";

export interface Meta {
  description?: string;
  author?: string;
  siteName?: string;
  coverImage?: string;
  coverImageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
}

type MetadataProps = {
  title: string;
  meta?: Meta;
  url?: string;
};

export function generateMetadata({
  title,
  url = `${process.env.NEXT_PUBLIC_URL}/blog`,
  meta,
}: MetadataProps): Metadata {
  const author = meta?.author ?? "Sat Naing";
  const description =
    meta?.description ??
    "Articles about programming, coding, technologies, software engineering, my personal projects and my experiences.";
  const siteName = meta?.siteName ?? "Sat Naing's Blog";
  const type = meta?.type ?? "article";
  const coverImage = meta?.coverImage;
  const coverImageAlt = meta?.coverImageAlt;
  const ogImage = meta?.ogImage;
  const ogImageAlt = meta?.ogImageAlt;

  const appOgImage =
    ogImage ?? coverImage ?? `${process.env.NEXT_PUBLIC_URL}/satnaing-blog-og.png`;
  const appOgImageAlt =
    ogImageAlt ?? coverImageAlt ?? "Sat Naing's Blog";

  return {
    title,
    authors: [{ name: author }],
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: appOgImage,
          alt: appOgImageAlt,
        },
      ],
      url,
      siteName,
      type,
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: appOgImage,
          alt: appOgImageAlt,
        },
      ],
    },
  };
}

export default generateMetadata;