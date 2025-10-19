import Image from "next/image";
import DaktimmerImage from "@/public/images/services/charpenter.webp";

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
            <h2 className="h2 font-bold !text-[--primary-color]">Charpentes</h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  Une toiture bien construite commence par une charpente
                  réalisée par des professionnels. Chez{" "}
                  <strong className="text-[--primary-color]">
                    WD Toitures
                  </strong>
                  , nous avons l'expérience dans la conception et la réalisation
                  de structures de toiture robustes et durables, capables de
                  résister aux intempéries.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Nous proposons des solutions sur mesure pour la construction
                  neuve comme pour la rénovation, en utilisant des essences de
                  bois durables et des techniques de construction modernes. Nos
                  structures sont conçues pour assurer une stabilité et une
                  capacité portante optimales, essentielles à la sécurité et à
                  la longévité du toit.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Nos prestations incluent la construction complète de la
                  charpente (pose de fermes, pannes et chevrons) ainsi que la
                  coordination parfaite avec l'isolation et la couverture, afin
                  de garantir une protection optimale du bâtiment.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Nous collaborons étroitement avec nos clients pour obtenir un
                  résultat techniquement impeccable et conforme à l'esthétique
                  du bâtiment. Avec précision et savoir‑faire, nous assurons des
                  charpentes qui traversent les générations.
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
                  src={DaktimmerImage} // Substitua pela imagem correta
                  alt="Daktimmer"
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
            Questions fréquentes sur les charpentes
          </h2>

          <div className="flex flex-col gap-y-4 md:gap-y-10 items-center max-w-2xl mx-auto">
            <Disclosure>
              <DisclosureButton className="group flex items-center  gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Qu'est‑ce que la charpente ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                La charpente désigne l'art de concevoir et de construire des
                structures de toiture. Cela inclut la pose de fermes, pannes et
                chevrons pour créer une structure robuste et durable.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center  gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Pourquoi une bonne structure de toiture est‑elle importante ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Une bonne structure de toiture garantit stabilité, capacité
                portante et protection contre les intempéries. Elle est
                essentielle pour la sécurité et la durabilité du bâtiment.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center  gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Quels matériaux sont utilisés pour la charpente ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Nous utilisons des essences de bois durables et des techniques
                modernes afin d'assurer une charpente de haute qualité,
                résistante aux éléments.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center  gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                La charpente peut‑elle être utilisée en rénovation ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Oui, nous proposons des solutions sur mesure pour la
                construction neuve et la rénovation. Notre équipe renforce et
                améliore les structures existantes.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
              <DisclosureButton className="group flex items-center  gap-2 text-lg md:text-xl font-semibold text-[--primary-color]">
                Combien de temps faut‑il pour construire une charpente ?
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                La durée dépend de l'ampleur et de la complexité du projet. Nous
                planifions et exécutons toujours efficacement pour respecter les
                délais.
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
