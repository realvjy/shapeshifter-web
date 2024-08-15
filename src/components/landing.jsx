import Marquee from "react-fast-marquee";
import { useEffect, useState, useMemo } from "react";
import Plugin from "./plugin";
const previewImgs = ["preview-1.png", "preview-2.png", "preview-3.png"];

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = previewImgs[currentImageIndex];

  useEffect(() => {
    console.log(`
       __                             __    _ ______           
 _____/ /_  ____ _____  ___     _____/ /_  (_) __/ /____  _____
/ ___/ __ \\/ __ \`/ __ \\/ _ \\   / ___/ __ \\/ / /_/ __/ _ \\/ ___/
(__  ) / / / /_/ / /_/ /  __/  (__  ) / / / / __/ /_/  __/  /    
/____/_/ /_/\\__,_/ .___/\\___/  /____/_/ /_/_/_/  \\__/\\___/_/     
                /_/                                              
shapeshifter by https://x.com/realvjy
`);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % previewImgs.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="landing">
      <section className="meta-section">
        <div className="container ">
          <div className="meta-wrapper">
            <div className="top">
              <div className="logo">
                <img src="shapeshifter.svg" />
              </div>
              <div className="install-btn">
                <a href="https://www.figma.com/@realvjy">
                  <span>
                    <img src="/figma_icon.svg" />
                  </span>
                  Install on Figma
                </a>
              </div>
              <Plugin />
            </div>
          </div>
          <div className="footer">
            <div className="footer-credit">
              crafted at
              <a
                href="https://overlayz.studio?ref=gm"
                target="_blank"
                className="overlayz"
              >
                <img src="overlayz.svg" />
              </a>
              by
              <a
                href="https://x.com/realvjy"
                className="realvjy"
                target="_blank"
              >
                <img src="realvjy.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
