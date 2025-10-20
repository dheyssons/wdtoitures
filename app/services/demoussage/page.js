import Image from "next/image";
import DemoussageImage from "@/public/images/services/demoussage.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Daktimmer() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-xl lg:max-w-screen-xl pt-28">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">Démoussage</h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  Une{" "}
                  <strong className="text-[--primary-color]">
                    toiture propre
                  </strong>{" "}
                  et bien entretenue commence par un{" "}
                  <strong className="text-[--primary-color]">démoussage</strong>{" "}
                  réalisé par des professionnels. Chez{" "}
                  <strong className="text-[--primary-color]">
                    WD Toitures
                  </strong>
                  , nous mettons notre savoir-faire au service de l’entretien et
                  de la protection de votre toit, afin de préserver sa
                  durabilité et son apparence au fil du temps.
                </p>

                <p className="text-gray-700 p small leading-relaxed">
                  Nous proposons des solutions sur mesure pour le{" "}
                  <strong className="text-[--primary-color]">
                    nettoyage et le traitement antimousse
                  </strong>{" "}
                  des toitures, adaptées à chaque type de matériau (tuiles,
                  ardoises, zinc, etc.). Nous utilisons des{" "}
                  <strong className="text-[--primary-color]">
                    produits respectueux de l’environnement
                  </strong>{" "}
                  et des techniques modernes qui garantissent un résultat
                  durable tout en préservant l’intégrité du revêtement.
                </p>

                <p className="text-gray-700 p small leading-relaxed">
                  Nos prestations incluent le{" "}
                  <strong className="text-[--primary-color]">
                    nettoyage en profondeur
                  </strong>
                  , le{" "}
                  <strong className="text-[--primary-color]">
                    traitement préventif et curatif
                  </strong>{" "}
                  contre les mousses, lichens et algues, ainsi que la{" "}
                  <strong className="text-[--primary-color]">
                    vérification de l’état général
                  </strong>{" "}
                  du toit afin de détecter toute anomalie avant qu’elle ne
                  devienne un problème.
                </p>

                <p className="text-gray-700 p small leading-relaxed">
                  Nous collaborons étroitement avec nos clients pour déterminer
                  la{" "}
                  <strong className="text-[--primary-color]">
                    méthode la plus adaptée
                  </strong>{" "}
                  à leur toiture. Grâce à notre{" "}
                  <strong className="text-[--primary-color]">
                    précision, rigueur et expérience
                  </strong>
                  , nous redonnons à votre toit son éclat d’origine et assurons
                  une{" "}
                  <strong className="text-[--primary-color]">
                    protection durable
                  </strong>{" "}
                  contre les agressions du temps et des intempéries.
                </p>

                {/* Call-to-Action */}
                <div className="mt-10">
                  <a className="btn max-w-max uppercase" href="#contactus">
                    Demandez un devis
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="rounded-md max-w-lg overflow-hidden shadow-md">
                <Image
                  src={DemoussageImage} // Substitua pela imagem correta
                  alt="Démoussage"
                  className=""
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Título */}
          <h2 className="text-4xl font-bold text-black text-center mb-8">
            Questions fréquentes sur le démoussage
          </h2>

          <div className="flex flex-col gap-y-4 md:gap-y-10 items-center max-w-2xl mx-auto">
            <Disclosure>
              <DisclosureButton className="group flex items-center gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Qu’est-ce que le démoussage ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Le démoussage consiste à nettoyer et à traiter la toiture afin
                d’éliminer les mousses, lichens et algues qui s’y développent.
                Ce procédé permet de prolonger la durée de vie du toit et de
                prévenir les infiltrations d’eau.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Pourquoi est-il important de démousser sa toiture ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Un toit mal entretenu peut accumuler des végétations qui
                retiennent l’humidité et fragilisent les matériaux. Le
                démoussage assure une meilleure protection contre les
                intempéries et évite des réparations coûteuses à long terme.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                À quelle fréquence faut-il effectuer un démoussage ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                En général, un démoussage est recommandé tous les 2 à 3 ans,
                selon l’exposition de la toiture et le type de matériau. Un
                entretien régulier permet de maintenir le toit en excellent
                état.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Quels produits utilisez-vous pour le traitement ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Nous utilisons des produits{" "}
                <strong className="text-[--primary-color]">
                  respectueux de l’environnement
                </strong>{" "}
                et adaptés à chaque type de couverture. Ils éliminent
                efficacement les micro-organismes tout en préservant le matériau
                du toit.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Le démoussage abîme-t-il la toiture ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Non. Réalisé par des{" "}
                <strong className="text-[--primary-color]">
                  professionnels expérimentés
                </strong>
                , le démoussage est effectué avec soin et sans haute pression,
                afin de protéger les tuiles ou ardoises tout en garantissant un
                résultat durable.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
