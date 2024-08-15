import { NextSeo } from "next-seo";

const Page = () => (
  <>
    <NextSeo
      title="Shape Shifter - Figma Plugin"
      description="Beautiful gradient generator for figma"
      canonical="https://vjy.me"
      openGraph={{
        url: "https://vjy.me",
        title: "SHape Shifter - Figma Plugin & Web app",
        description: "Shape Shifter like photoshop in Figma",
        images: [
          {
            url: "https://vjy.me/ss-preview.jpg",
            alt: "Shape Shifter - Figma Plugin & Web app",
          },
        ],
        site_name: "Shape Shifter - Figma Plugin & Web app",
      }}
      keywords="gradient, figma plugin, gradientmap, figma, color, figma image, realvjy, overlayz, figma gradient"
      twitter={{
        handle: "@realvjy",
        site: "https://vjy.me",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export default Page;
