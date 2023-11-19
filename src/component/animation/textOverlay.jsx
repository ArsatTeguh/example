import gsap from "gsap";
import { useEffect } from "react";

const TextOverlay = () => {
  useEffect(() => {
    let text = document.querySelector("div");
    let char = text.querySelectorAll("span");
    let replaceChar = text.querySelectorAll('span:not([data-char="."])');

    const t1 = gsap.timeline();
    t1.set(char, {
      yPercent: -110,
    });
    t1.set(text, {
      autoAlpha: 1,
    });
    t1.to(char, {
      duration: 1,
      yPercent: 0,
      stagger: 0.05,
      ease: "expo.inOut",
    }).to(replaceChar, {
      duration: 1,
      yPercent: 110,
      ease: "expo.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
  }, []);
  return (
    <div className="border-2 border-orange-500 flex items-center justify-center text-overlay text-9xl font-bold bg-black text-center ">
      <span className="block relative" data-char="E">
        E
      </span>
      <span className="block relative" data-char=".">
        X
      </span>
      <span className="block relative" data-char="A">
        A
      </span>
      <span className="block relative" data-char=".">
        M
      </span>
      <span className="block relative" data-char="P">
        P
      </span>
      <span className="block relative" data-char=".">
        L
      </span>
      <span className="block relative" data-char="E">
        E
      </span>
    </div>
  );
};

export default TextOverlay;
