import Image from "next/image";
import GroendakenImage from "@/public/images/services/groendaken/image1.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Groendaken() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-32">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">
              Toitures végétalisées
            </h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  Un{" "}
                  <strong className="text-[--primary-color]">
                    toit végétalisé
                  </strong>{" "}
                  offre non seulement un intérêt esthétique mais aussi de
                  nombreux avantages fonctionnels. Grâce aux capacités
                  d'isolation naturelles des végétaux, il régule la température
                  intérieure, réduisant ainsi les besoins en{" "}
                  <strong className="text-[--primary-color]">chauffage</strong>
                  et en{" "}
                  <strong className="text-[--primary-color]">
                    climatisation
                  </strong>
                  . Cela peut entraîner des{" "}
                  <strong className="text-[--primary-color]">
                    économies d'énergie
                  </strong>
                  et un meilleur{" "}
                  <strong className="text-[--primary-color]">
                    confort thermique
                  </strong>
                  tout au long de l'année.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Les toits végétalisés absorbent aussi les eaux pluviales,
                  contribuant à une meilleure gestion de l'eau et alléger la
                  pression sur le réseau d'assainissement. Ils filtrent des
                  polluants de l'air et favorisent la biodiversité en offrant un
                  habitat à des oiseaux et des insectes.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Pour une construction neuve ou la rénovation d'un toit
                  existant, nous réalisons une installation professionnelle avec
                  des matériaux de haute qualité. Investir dans un toit
                  végétalisé signifie investir dans un environnement plus
                  durable, économe en énergie et sain.
                </p>
                {/* Call-to-Action */}
                <div className="mt-8">
                  <a className="btn max-w-max uppercase" href="#contactus">
                    Demandez un devis
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="rounded-md max-w-md overflow-hidden shadow-md">
                <Image
                  src={GroendakenImage}
                  alt="Groendaken"
                  className=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h3 className="h3 font-bold text-black text-center mb-8">
            Questions fréquentes
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Comment entretenir une toiture végétalisée ?
              </h4>
              <p className="text-gray-700">
                Une toiture végétalisée demande peu d'entretien : enlever les
                mauvaises herbes et vérifier périodiquement l'absence
                d'obstruction des évacuations.
              </p>
            </div>
            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Une toiture végétalisée convient‑elle à tous les toits ?
              </h4>
              <p className="text-gray-700">
                La plupart des toits peuvent accueillir une végétalisation, maar
                het is belangrijk om de draagkracht te controleren. Ons team kan
                u hierover adviseren.
              </p>
            </div>
            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quel is le coût d'une toiture végétalisée ?
              </h4>
              <p className="text-gray-700">
                Les coûts varient selon la taille en complexiteit van het
                project. Neem contact op voor een vrijblijvende offerte.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
