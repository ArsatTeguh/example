import { useEffect } from "react";
import { gsap } from "gsap";

const Overlay = () => {
  useEffect(() => {
    gsap.to("#overlay", { y: "-100vh", delay: 1.5 });
    gsap.to("#layer1", { y: "-100vh", delay: 0.5 });
    gsap.to("#layer2", { y: "-100vh", delay: 0.7 });
    gsap.to("#layer3", { y: "-100vh", delay: 0.9 });
  }, []);

  return (
    <div id="overlay" className="overlay-layer">
      <div id="layer1" className="flex-1 bg-white"></div>
      <div id="layer2" className="flex-1 bg-white"></div>
      <div id="layer3" className="flex-1 bg-white"></div>
    </div>
  );
};

export default Overlay;
