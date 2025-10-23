"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla max-w-[22rem]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="max-w-[22rem] h-[26rem] object-cover rounded-sm hidden md:flex"
            src="images/projet1.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="w-full max-w-[22rem] h-[26rem] object-cover rounded-sm hidden md:flex"
            src="images/projet2.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="max-w-[22rem] h-[26rem] object-cover rounded-sm hidden md:flex"
            src="images/projet3.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="max-w-[22rem] h-[26rem] object-cover rounded-sm hidden md:flex"
            src="images/projet4.webp"
          ></img>
        </div>
        <div className="embla__slide">
          <img
            loading="lazy"
            alt=""
            className="max-w-[22rem] h-[26rem] object-cover rounded-sm hidden md:flex"
            src="images/projet5.webp"
          ></img>
        </div>
      </div>
    </div>
  );
}
