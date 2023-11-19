/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = ({ targetSelector }) => {
  const cursorRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      gsap.to([cursorRef.current, maskRef.current], {
        x: clientX,
        y: clientY,
        stagger: -0,
      });
    });

    const hoverEffect = () => {
      gsap.to(maskRef.current, {
        scale: 3,
        background: "#FFF",
      });
      cursorRef.current.classList.add("cursor-hidden"); // Menambahkan kelas untuk menyembunyikan border
    };

    const resetEffect = () => {
      gsap.to(maskRef.current, {
        scale: 1,
        background: "transparent",
      });
      cursorRef.current.classList.remove("cursor-hidden"); // Menghapus kelas untuk menampilkan border kembali
    };

    const hoverTargets = document.querySelectorAll(targetSelector);
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", hoverEffect);
      el.addEventListener("mouseleave", resetEffect);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", hoverEffect);
        el.removeEventListener("mouseleave", resetEffect);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={maskRef} className="mask"></div>
    </>
  );
};

export default Cursor;
