import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../../public/img/view1/galeria1.jpg";
import img2 from "../../public/img/view1/galeria2.jpg";

type Props = {
  toggleViewImages: () => void;
};

const ViewImages = ({ toggleViewImages }: Props) => {
  const handleChildElementClick = (e: any) => {
    e.stopPropagation();
    // Do other stuff here
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".img", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewImages}
    >
      <div
        className="flex img gap-2 w-10/12 h-auto xl:w-[70rem] items-center justify-center relative"
        onClick={(e) => handleChildElementClick(e)}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          //   showIndicators={false}
          infiniteLoop={true}
          autoPlay={false}
          stopOnHover={false}
          renderArrowPrev={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                className="absolute z-10 cursor-pointer top-[calc(50%-1.25rem)] lg:top-[calc(50%-1.8rem)] left-1 lg:left-2 w-10 lg:w-14"
                onClick={onClickHandler}
              >
                <img src="/img/arrow.png" className="rotate-180" />
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
              className="absolute z-10 cursor-pointer top-[calc(50%-1.25rem)] lg:top-[calc(50%-1.8rem)] right-1 lg:right-2 w-10 lg:w-14"
              onClick={onClickHandler}
              >
                <img src="/img/arrow.png" className="" />
              </div>
            )
          }
          className=" text-white w-full h-full relative "
        >
          <div className=" flex items-center justify-center  relative flex-col h-full">
            <div className="w-full h-[10rem] sm:h-[15rem] lg:h-[20rem] xl:h-[35rem] relative">
              <Image
                className="object-cover"
                alt="img2"
                src={img1}
                placeholder="blur"
                fill
                quality={50}
              />
            </div>
            <div className="bg-black/60 px-5 lg:px-20 pt-5 pb-10 w-full flex-1">
              <p className="text-xs lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam tempora nesciunt mollitia libero.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center  relative flex-col h-full">
            <div className="w-full h-[10rem] sm:h-[15rem] lg:h-[20rem] xl:h-[35rem] relative">
              <Image
                className="object-cover"
                alt="img2"
                src={img2}
                placeholder="blur"
                quality={50}
                fill
              />
            </div>
            <div className="bg-black/60 px-5 lg:px-20 pt-5 pb-10 w-full flex-1">
              <p className="text-xs lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam tempora nesciunt mollitia libero. asdasdasd asd asdasdasdasd asdas
                asdasdasdasdasdasfas
              </p>
            </div>
          </div>
          {/* <div className=" flex items-center justify-center  relative flex-col">
            <div className="w-full h-full relative">
              <Image
                className="object-cover"
                alt="img2"
                src={img2}
                placeholder="blur"
                
              />
            </div>
          </div> */}
        </Carousel>
        <a
          onClick={toggleViewImages}
          className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
        >
          X
        </a>
      </div>
    </div>
  );
};

export default ViewImages;
