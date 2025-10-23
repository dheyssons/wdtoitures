"use client";

import Image from "next/image";
import Frans from "@/public/images/about/frans.webp";
import Jos from "@/public/images/about/jos.webp";
import Marcel from "@/public/images/about/marcel.webp";
import Rudy from "@/public/images/about/rudy.webp";
import Velux from "@/public/images/brands/velux.webp";
import Resitrix from "@/public/images/brands/resitrix.webp";
import Iko from "@/public/images/brands/iko.webp";
import Bosscover from "@/public/images/brands/bosscover.webp";

import ContactForm from "@/components/contactform";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const images = [
    "/images/brands/velux.webp",
    "/images/brands/resitrix.webp",
    "/images/brands/iko.webp",
    "/images/brands/bosscover.webp",
  ];

  const people = [
    "/images/about/frans.webp",
    "/images/about/jos.webp",
    "/images/about/marcel.webp",
    "/images/about/rudy.webp",
  ];

  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <main className="flex flex-col gap-y-20 lg:gap-y-20">
      <section className="container mx-auto flex flex-col items-center justify-center md:flex-row max-w-sm md:max-w-screen-lg pt-40 pb-10 gap-x-20">
        {/* IMAGES */}
        <div className="hidden md:flex flex-col items-center">
          <Image
            loading="eager"
            className="w-32 rounded-sm"
            src={Frans}
            alt=""
          />
          <div className="accentV"></div>
          <Image loading="eager" className="w-32 rounded-sm" src={Jos} alt="" />
          <div className="accentV"></div>
          <Image
            loading="eager"
            className="w-32 rounded-sm"
            src={Marcel}
            alt=""
          />
          <div className="accentV"></div>
          <Image
            loading="eager"
            className="w-32 rounded-sm"
            src={Rudy}
            alt=""
          />
        </div>
        {/* TEXTS */}
        <div className="flex flex-col gap-y-8">
          <div>
            <div className="flex flex-row items-center">
              <div className="accent"></div>
              <h4 className="h5 !text-[--primary-color]">Onze Geschiedenis</h4>
            </div>
            <h1 className="h3">
              Quatre générations d'excellence <br /> en menuiserie
            </h1>
          </div>
          <div className="flex flex-col gap-y-6">
            <p className="p small w-[22rem] md:w-[22rem] lg:w-[38rem] leading-8">
              Au cœur d'un artisanat traditionnel, notre aventure a commencé il
              y a plus d'un siècle, avec une inébranlable volonté de qualité et
              une attention méticuleuse aux détails. Tout a commencé en 1906
              lorsque Frans De Haes reprit une vieille carrosserie et forgea une
              réputation enviable. Ses réalisations, des brouettes aux véhicules
              de transport, étaient synonymes de durabilité et de précision. Son
              secret ? Du bois sec et un sens aigu de la finition parfaite.
            </p>
            <p className="p small w-[22rem] md:w-[22rem] lg:w-[38rem] leading-8">
              L'héritage de Frans a été poursuivi par ses fils Michiel et Jos,
              qui ont développé l'entreprise après 1946. Sous la direction de
              Jos, l'atelier s'est transformé pour répondre aux nouvelles
              demandes du marché : la menuiserie résidentielle, les toitures,
              fenêtres, portes et structures en bois, tout en conservant le cœur
              du savoir‑faire traditionnel.
            </p>
            <p className="p small w-[22rem] md:w-[22rem] lg:w-[38rem] leading-8">
              La croissance s'est poursuivie avec Marcel De Haes, qui a
              modernisé les processus et augmenté la capacité de production,
              faisant passer l'entreprise d'une maison par mois à plusieurs
              réalisations par semaine. L'innovation est devenue partie
              intégrante de notre identité, garantissant efficacité et
              précision. Plus tard, son fils Rudy a pris la direction et a
              renforcé la position de l'entreprise sur le marché.
            </p>
            <p className="p small w-[22rem] md:w-[22rem] lg:w-[38rem] leading-8">
              Aujourd'hui, la quatrième génération perpétue l'esprit pionnier de
              la famille De Haes. Nous combinons tradition et technologie pour
              proposer des solutions de menuiserie qui traversent les
              générations, toujours avec un fort accent sur la qualité et la
              satisfaction client. Chaque toit construit, chaque porte posée et
              chaque détail soigné reflètent plus de 100 ans d'expérience et de
              passion pour le métier.
            </p>
            <p className="p small w-[22rem] md:w-[22rem] lg:w-[38rem] leading-8 italic">
              ´
              <strong>
                Nous construisons l'avenir sans oublier nos racines.
              </strong>
            </p>
          </div>
        </div>
        {/* IMAGE SLIDER */}
        <div className="md:hidden relative overflow-hidden w-full py-4">
          <div className="absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-50" />
          <div className="absolute top-0 right-0 w-30 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-50" />

          <motion.div
            ref={carouselRef}
            className="flex space-x-6 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: [0, -width] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {people.concat(people).map((src, index) => (
              <div
                key={index}
                className="flex flex-row items-center min-w-[200px]"
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col gap-y-6 max-w-sm md:max-w-xl lg:max-w-screen-2xl items-center">
        <h3 className="h3">WD Toitures</h3>

        <div className="flex flex-col gap-y-4 items-center">
          <p className="p !max-w-screen-lg small">
            Nous sommes spécialisés dans les travaux de toiture : entretien,
            rénovations, étanchéité, isolation et réparations. Quel que soit le
            service requis, notre équipe hautement qualifiée assure des
            interventions de qualité et une gestion professionnelle et efficace
            de votre chantier. Votre satisfaction est notre priorité.
          </p>
          <p className="p !max-w-screen-lg small">
            Nous privilégions une communication directe et transparente. Vous
            disposez d'un interlocuteur unique pour suivre votre projet et
            obtenir une totale clarté sur les coûts avant le démarrage des
            travaux.
          </p>
        </div>
      </section>

      {/* BRANDs and certifications */}
      <section className="container mx-auto flex flex-col items-center max-w-screen-lg gap-y-6">
        <h3 className="h4 text-center">
          <span className="text-[--primary-color]">deskundigen</span> in
          dakwerken, gevelbekleding, groendaken en isolatie
        </h3>
        <p className="p small text-center !max-w-screen-lg">
          Wij werken met de beste merken op de markt, van kwaliteitsleveranciers
          met alle nodige certificeringen:
          <i> Resitrix, Velux, Iko enertherm, </i>enz.
        </p>
        <div className="hidden lg:flex flex-row gap-x-20">
          <Image className="w-36" src={Velux} alt="" />
          <Image className="w-36" src={Iko} alt="" />
          <Image className="w-36" src={Resitrix} alt="" />
          <Image className="w-36 object-scale-down" src={Bosscover} alt="" />
        </div>

        {/* IMAGE SLIDER */}
        <div className=" lg:hidden relative overflow-hidden w-full py-4">
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-50" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-50" />

          <motion.div
            ref={carouselRef}
            className="flex space-x-6 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: [0, -width] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {images.concat(images).map((src, index) => (
              <div
                key={index}
                className="flex flex-row items-center min-w-[144px]"
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={300}
                  height={200}
                  className="rounded-md object-scale-down px-4"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
