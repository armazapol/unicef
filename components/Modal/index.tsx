import React, { useEffect } from "react";
import { gsap } from "gsap";

type Props = {
  viewVideo: () => void;
};

const Modal = ({ viewVideo }: Props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".video", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      onClick={viewVideo}
    >
      <div className="flex video gap-2 h-5/6 w-10/12 xl:w-[1020px] xl:h-[630px] relative">
        <iframe

          src="https://www.youtube.com/embed/EH3ipfAY6AY?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          onClick={viewVideo}
          className="cursor-pointer absolute -right-5 text-white text-xl font-semibold"
        >
          X
        </a>
      </div>
    </div>
  );
};

export default Modal;
