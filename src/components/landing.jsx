import Marquee from "react-fast-marquee";
import { useEffect, useState, useMemo } from "react";
import Plugin from "./plugin";
import styled from "styled-components";
import Link from "next/link";

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
              <p>Figma companion for vector/illustration work</p>
              <div className="install-btn">
                <a href="https://www.figma.com/@realvjy">
                  <span>
                    <img src="/figma_icon.svg" />
                  </span>
                  Install now
                </a>
              </div>
              <div className="plugin-box">
                <Plugin />
              </div>
            </div>
          </div>
          <div className="footer">
            <Wrapper>
              made by
              <span>
                <Link target={"_blank"} href={"https://vjy.me?figmaplugin"}>
                  <img src="realvjy.svg" className="img-r" />
                </Link>
              </span>
              at
              <span>
                <Link
                  target={"_blank"}
                  href={"https://overlayz.studio?figmaplugin"}
                >
                  @overlayz
                </Link>
              </span>
              <span className={"img"}>
                <Link target="" href={"https://x.com/realvjy"}>
                  <img src={"twitter.svg"} />
                </Link>
              </span>
            </Wrapper>
          </div>
        </div>
      </section>
    </main>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 40px 0;
  font-size: 16px;
  letter-spacing: -0.2px;
  font-weight: 500;
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
  gap: 4px;
  align-items: center;
  span {
    padding-inline: 5px;
    font-weight: 500;
    .img-r {
      transform: scale(1.2);
    }
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
    &.img {
      padding: 0;
    }
  }
`;
