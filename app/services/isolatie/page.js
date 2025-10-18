import Image from "next/image";
import IsolatieImage from "@/public/images/services/isolatie.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Isolatie() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-32">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">Isolation</h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  Une isolation de toiture appropriée est essentielle pour
                  optimiser la{" "}
                  <strong className="text-[--primary-color]">
                    performance énergétique
                  </strong>
                  et garantir un confort intérieur tout au long de l'année. Nous
                  utilisons des matériaux de haute qualité, comme la laine
                  minérale ou des solutions écologiques, pour offrir une
                  protection optimale contre les variations climatiques,
                  limitant les pertes de chaleur en hiver et conservant la
                  fraîcheur en été.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Au‑delà du confort, une bonne isolation permet de réaliser
                  d'importantes{" "}
                  <strong className="text-[--primary-color]">
                    économies d'énergie
                  </strong>
                  , ce qui en fait un investissement rentable sur le long terme.
                  Ce service convient aussi bien aux constructions neuves qu'aux
                  rénovations, et notre équipe spécialisée garantit une pose
                  rapide, efficace et soignée.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Avec notre exigence de{" "}
                  <strong className="text-[--primary-color]">qualité</strong>
                  et d'
                  <strong className="text-[--primary-color]">efficacité</strong>
                  , nous vous offrons une toiture qui conserve une température
                  idéale en toutes saisons, contribuant à un habitat plus
                  durable et économique.
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
                  src={IsolatieImage} // Substitua pela imagem correta
                  alt="Isolatie"
                  className=""
                  loading="lazy"
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
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Questions fréquentes sur l'isolation
          </h2>

          {/* Lista de Perguntas e Respostas */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Pourquoi l'isolation de la toiture est‑elle importante ?
              </h4>
              <p className="text-gray-700">
                L'isolation de la toiture est essentielle pour améliorer la{" "}
                <strong className="text-[--primary-color]">
                  performance énergétique
                </strong>{" "}
                et garantir le confort intérieur. Elle prévient les pertes de
                chaleur en hiver et maintient la fraîcheur en été.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels matériaux sont utilisés pour l'isolation ?
              </h4>
              <p className="text-gray-700">
                Nous utilisons des matériaux de haute qualité tels que la{" "}
                <strong className="text-[--primary-color]">
                  laine minérale
                </strong>{" "}
                et des{" "}
                <strong className="text-[--primary-color]">
                  options écologiques
                </strong>{" "}
                pour assurer la meilleure protection face aux variations
                climatiques.
              </p>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Combien puis‑je économiser grâce à l'isolation ?
              </h4>
              <p className="text-gray-700">
                Une bonne isolation peut générer des économies significatives
                sur vos{" "}
                <strong className="text-[--primary-color]">
                  coûts énergétiques
                </strong>
                , ce qui en fait un investissement rentable sur le long terme.
              </p>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                L'isolation convient‑elle aux nouvelles constructions et aux
                rénovations ?
              </h4>
              <p className="text-gray-700">
                Oui, nos services d'isolation conviennent aux{" "}
                <strong className="text-[--primary-color]">
                  nouvelles constructions
                </strong>{" "}
                comme aux{" "}
                <strong className="text-[--primary-color]">rénovations</strong>.
                Notre équipe assure une installation rapide et efficace.
              </p>
            </div>

            {/* Pergunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels sont les avantages d'une isolation professionnelle ?
              </h4>
              <p className="text-gray-700">
                Une isolation professionnelle garantit un{" "}
                <strong className="text-[--primary-color]">
                  confort optimal
                </strong>
                , réduit les coûts énergétiques et contribue à une maison plus{" "}
                <strong className="text-[--primary-color]">durable</strong> et{" "}
                <strong className="text-[--primary-color]">économique</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Whyus />

      <Testimonials />

      <ContactForm />
    </div>
  );
}
