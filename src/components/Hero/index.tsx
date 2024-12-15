import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../../utils";

export const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState(
    innerWidth < 768 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.5 });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2.5
    });
  }, []);

  useEffect(() => {
    addEventListener("resize", () => {
      setVideoSrc(innerWidth < 768 ? smallHeroVideo : heroVideo);
    });
    return () => {
      removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black">
      <div className="flex flex-col flex-center h-5/6">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-10"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From 199$/month or 999$</p>
      </div>
    </section>
  );
};
