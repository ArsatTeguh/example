import TextOverlay from "./animation/textOverlay";
import rocket from "/rocket.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import rocket1 from "/rocket1.png";

const Section2 = () => {
  useEffect(() => {
    const imgText = gsap.utils.toArray(".text-img");
    const imgWrap = document.querySelector(".img-wraper");
    const imgItem = document.querySelector(".img-placeholder img");

    function moveImg(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(imgWrap, {
        duration: 1,
        x: mouseX,
        y: mouseY,
        ease: "power3.out", // contoh ease
      });
    }
    function linkhover(e) {
      if (e.type === "mouseenter") {
        let imgsrc = e.target.dataset.src;
        let t1 = gsap.timeline();

        t1.set(imgItem, {
          attr: { src: imgsrc },
        }).to(imgWrap, {
          autoAlpha: 1,
          scale: 1,
        });
      } else if (e.type === "mouseleave") {
        let t1 = gsap.timeline();
        t1.to(imgWrap, {
          autoAlpha: 0,
          scale: 0.3,
        });
      }
    }
    imgText.forEach((link) => {
      link.addEventListener("mousemove", moveImg);
      link.addEventListener("mouseenter", linkhover);
      link.addEventListener("mouseleave", linkhover);
    });

    // Membersihkan event listener saat komponen di-unmount

    return () => {
      imgText.forEach((link) => {
        link.removeEventListener("mousemove", moveImg);
        link.removeEventListener("mouseenter", linkhover);
        link.removeEventListener("mouseleave", linkhover);
      });
    };
  }, []);

  useEffect(() => {
    let container = document.querySelector(".banner");
    gsap.fromTo(
      container,
      {
        clipPath: "circle(5% at 77% 40%)",
      },
      {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scrub: 1,
          start: "top center",
          end: "top center-=200",
        },
      }
    );
  }, []);

  useEffect(() => {
    // Registrasi ScrollTrigger sekali saja
    gsap.registerPlugin(ScrollTrigger);
    // ... kode animasi ScrollTrigger
  }, []);

  useEffect(() => {
    const image = document.querySelector(".img"); // Ganti dengan selector gambar Anda

    // Animasi ketika scrolling dari Section 1 ke Section 2
    gsap.fromTo(
      image,
      { scale: 0, opacity: 0, y: -100 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    // Animasi ketika scrolling ke Section 3
    gsap.fromTo(
      image,
      { scale: 1, opacity: 1, y: 0 },
      {
        scale: 0, // Kembali ke skala yang lebih kecil
        opacity: 0, // Transparan
        y: 100, // Sedikit ke atas
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "bottom bottom", // Mulai animasi ketika bagian bawah gambar sejajar dengan bagian bawah viewport
          end: "bottom top", // Akhiri animasi ketika bagian atas gambar sejajar dengan bagian atas viewport
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <section className="w-full relative h-screen bg-zinc-100 ">
      <div className="banner    bg-black flex items-center justify-between px-20 w-full h-full">
        <div className="img">
          <img src={rocket} alt="rocket" className="w-[60%] h-[50%]  " />
        </div>
        <div className="w-full">
          <TextOverlay />
          <div className="flex flex-col text-white font-bold">
            <div className="text-9xl ">
              <a href="#" className="text-img" data-src={rocket}>
                EXAMPLE
              </a>
            </div>
            <div className="text-9xl ">
              <a href="#" className="text-img" data-src={rocket1}>
                EXAMPLE
              </a>
            </div>
            <div className="text-9xl ">
              <a href="#" className="text-img" data-src={rocket}>
                EXAMPLE
              </a>
            </div>
          </div>
        </div>
        <div className="img-wraper">
          <div className="img-placeholder bg-white p-5">
            <img src={rocket1} alt="rocket1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
