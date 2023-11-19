import { useEffect } from "react";
import Cursor from "./animation/cursorHover";
import Overlay from "./animation/overlay";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

const Section1 = () => {
  useEffect(() => {
    gsap.fromTo("#txt-1", { y: "-100vh" }, { y: 0, duration: 1, delay: 1.6 });
    gsap.fromTo("#txt-2", { y: "-100vh" }, { y: 0, duration: 1, delay: 1.7 });
    gsap.fromTo("#txt-3", { y: "-100vh" }, { y: 0, duration: 1, delay: 1.8 });
  }, []);
  useEffect(() => {
    gsap.to(".parallax-section", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <section className="  w-full h-full relative">
      <Overlay />
      <Cursor targetSelector=".hover-target" />
      <div className="flex relative  bg-black justify-between items-center w-full h-screen py-4 px-10">
        <div className="fixed top-0 left-0 img-bg"></div>
        <div className="flex flex-col hover-target gap-4 text-6xl font-extrabold text-white">
          <p id="txt-1">THIS IS EXAMPLE</p>
          <p id="txt-2">PROJECT ANIMATION</p>
          <p id="txt-3">WITH REACT GSAP AND THREE JS</p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
