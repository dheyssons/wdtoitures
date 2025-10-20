"use client";

import { useEffect, useRef, useState } from "react";

import { LuArrowUpRight } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";

import { motion } from "framer-motion";
import { upward } from "@/public/variants/upward";
import { transition1 } from "@/public/transitions/transition1";
import { transition1_s } from "@/public/transitions/transition1_s";
import { item } from "@/public/variants/item";

import Image from "next/image";

import Sint1 from "@/public/images/portfolio/sintkatelijnewaver1/image1.webp";
import Sint2 from "@/public/images/portfolio/sintkatelijnewaver1/image2.webp";
import Sint3 from "@/public/images/portfolio/sintkatelijnewaver1/image3.webp";
import Sint4 from "@/public/images/portfolio/sintkatelijnewaver1/image4.webp";
import Sint5 from "@/public/images/portfolio/sintkatelijnewaver1/image5.webp";
import Sint1_2 from "@/public/images/portfolio/sintkatelijnewaver2/image1.webp";
import Sint2_2 from "@/public/images/portfolio/sintkatelijnewaver2/image2.webp";
import Sint3_2 from "@/public/images/portfolio/sintkatelijnewaver2/image3.webp";
import Sint4_2 from "@/public/images/portfolio/sintkatelijnewaver2/image4.webp";
import Sint5_2 from "@/public/images/portfolio/sintkatelijnewaver2/image5.webp";

import Carousel from "@/components/carousel";
import CarouselMobile from "@/components/carouselmobile";
import Whyus from "@/components/whyus";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contactform";

const images = [
  "/images/portfolio/sintkatelijnewaver1/image1.webp",
  "/images/portfolio/sintkatelijnewaver1/image2.webp",
  "/images/portfolio/sintkatelijnewaver1/image3.webp",
  "/images/portfolio/sintkatelijnewaver1/image4.webp",
  "/images/portfolio/sintkatelijnewaver1/image5.webp",
  "/images/portfolio/sintkatelijnewaver2/image1.webp",
  "/images/portfolio/sintkatelijnewaver2/image2.webp",
  "/images/portfolio/sintkatelijnewaver2/image3.webp",
  "/images/portfolio/sintkatelijnewaver2/image4.webp",
  "/images/portfolio/sintkatelijnewaver2/image5.webp",
];

const sint1 = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-md rounded-md" src={Sint1} alt="" />
    <Image className="max-w-md rounded-md" src={Sint2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-md rounded-md" src={Sint3} alt="" />
    <Image className="max-w-md rounded-md" src={Sint4} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-md rounded-md" src={Sint5} alt="" />
  </div>,
];
const sint2 = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-md rounded-md" src={Sint1_2} alt="" />
    <Image className="max-w-md rounded-md" src={Sint2_2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-md rounded-md" src={Sint3_2} alt="" />
    <Image className="max-w-md rounded-md" src={Sint4_2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-md rounded-md" src={Sint5_2} alt="" />
  </div>,
];

const sintMobile1 = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-md rounded-md" src={Sint1} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-md rounded-md" src={Sint2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-md rounded-md" src={Sint3} alt="" />
  </div>,
  <div key="slide4" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-md rounded-md" src={Sint4} alt="" />
  </div>,
  <div key="slide5" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-md rounded-md" src={Sint5} alt="" />
  </div>,
];
const sintMobile2 = [
  <div key="slide1" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint1_2} alt="" />
  </div>,
  <div key="slide2" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint2_2} alt="" />
  </div>,
  <div key="slide3" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint3_2} alt="" />
  </div>,
  <div key="slide4" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint4_2} alt="" />
  </div>,
  <div key="slide5" className="flex flex-row gap-x-10">
    <Image className="max-w-sm lg:max-w-lg rounded-md" src={Sint5_2} alt="" />
  </div>,
];

export default function Portfolio() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <section>
      <div className="container mx-auto flex flex-col max-w-sm md:max-w-xl lg:max-w-screen-xl gap-y-20 pt-40">
        {/* TEXTS */}
        <div className="flex flex-col gap-y-4 overflow-hidden">
          <div className="flex flex-row items-center">
            <div className="accent"></div>
            <h5 className="h5 !text-[--primary-color]">Projets</h5>
          </div>
          <motion.h1
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1}
            className="h2"
          >
            Un aperçu de nos projets
          </motion.h1>
          <div className="flex flex-col gap-y-4">
            <p className="p small !max-w-screen-md">
              Le toit est la « couronne » de votre maison. Une charpente solide,
              réalisée avec des matériaux durables et un savoir‑faire
              professionnel, est essentielle. WD Toitures possède une longue
              expérience en charpentes traditionnelles et en structures à
              fermes. Tous les travaux de menuiserie utilisent des essences
              traitées, garanties contre la pourriture et les déformations.
            </p>
            <p className="p small !max-w-screen-md">
              L'architecture moderne crée parfois des défis complexes qui
              nécessitent une collaboration étroite avec l'architecte. Pour les
              rénovations, nous garantissons une exécution parfaite avec des
              matériaux durables. Vous pouvez choisir une finition avec ou sans
              sous‑toiture, et l'installation de fenêtres de toit Velux est
              réalisée de manière professionnelle.
            </p>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative overflow-hidden w-full py-10">
          <div className="absolute top-0 left-0 w-40 h-full pointer-events-none z-50" />
          <div className="absolute top-0 right-0 w-40 h-full pointer-events-none z-50" />

          <motion.div
            ref={carouselRef}
            className="flex space-x-6 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: [0, -width] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          >
            {images.concat(images).map((src, index) => (
              <div key={index} className="min-w-[256px]">
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={256}
                  height={128}
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex flex-col gap-y-24">
            {/* plateforme et isolation */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <h5 className="h6 !text-[--primary-color]">
                    Sint-Katelijne-Waver
                  </h5>
                </div>
                <h3 className="h3">Plateforme et isolation</h3>
              </div>

              <Carousel>{sint1}</Carousel>
              <CarouselMobile>{sintMobile1}</CarouselMobile>
            </div>

            {/* zinguerie et couverture */}
            <div className="flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center">
                  <div className="accent"></div>
                  <h5 className="h6 !text-[--primary-color]">
                    {" "}
                    Sint-Katelijne-Waver
                  </h5>
                </div>
                <h3 className="h3">Finition</h3>
              </div>

              <Carousel>{sint2}</Carousel>
              <CarouselMobile>{sintMobile2}</CarouselMobile>
            </div>
          </div>
        </div>

        <Whyus />
        <Testimonials />
        <ContactForm />

        <div className="line mb-8"></div>
      </div>
    </section>
  );
}
