import { NextSeo } from "next-seo";

const Page = () => (
  <>
    <NextSeo
      title="Shape Shifter - Figma Plugin"
      description="Figma companion for vector/illustration work"
      canonical="https://ss.figmaplug.in"
      openGraph={{
        url: "https://ss.figmaplug.in",
        title: "SHape Shifter - Figma Plugin",
        description: "Shape Shifter- Figma companion for vector/illustration work",
        images: [
          {
            url: "https://ss.figmaplug.in/preview.jpg",
            alt: "Shape Shifter - Figma Plugin",
          },
        ],
        site_name: "Shape Shifter - Figma Plugin",
      }}
      keywords="pathfinder, figma pathfinder, union, path, intersect, merge figma, illustration, overlayz, figma vector"
      twitter={{
        handle: "@realvjy",
        site: "https://vjy.me",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export default Page;
