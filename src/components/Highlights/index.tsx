import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../../utils";
import { VideoCarousel } from "../VideoCarousel";

export const Highlights: React.FC = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section className="w-screen bg-zinc h-full overflow-hidden common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full flex items-center justify-between flex-wrap">
          <h1 id="title" className="section-heading">
            Get the hightlights.
          </h1>
          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};
