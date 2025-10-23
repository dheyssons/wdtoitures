import Image from "next/image";
import RenovatieImage from "@/public/images/services/renovation.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Renovatie() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-28">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">Rénovation</h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  Une{" "}
                  <strong className="text-[--primary-color]">rénovation</strong>{" "}
                  bien réalisée augmente considérablement la valeur, la{" "}
                  <strong className="text-[--primary-color]">
                    performance énergétique
                  </strong>{" "}
                  et la fonctionnalité d'un bâtiment. Chez{" "}
                  <strong className="text-[--primary-color]">
                    WD Toitures
                  </strong>
                  , nous combinons le savoir‑faire traditionnel et des
                  techniques modernes pour redonner vie à votre maison ou à
                  votre bâtiment professionnel.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Nos services de rénovation couvrent les modifications
                  structurelles et les améliorations esthétiques. Nous prenons
                  en charge les rénovations de toitures, la réparation des
                  façades, l'amélioration des intérieurs et la restauration du
                  menuiserie. Qu'il s'agisse de la conservation d'un bâtiment
                  historique ou de la modernisation d'une construction
                  existante, nous livrons un résultat à la fois fonctionnel et
                  esthétique.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  En utilisant des{" "}
                  <strong className="text-[--primary-color]">
                    matériaux durables&nbsp;
                  </strong>
                  et des{" "}
                  <strong className="text-[--primary-color]">
                    solutions performantes
                  </strong>
                  , nous garantissons une rénovation qui prolonge la durée de
                  vie du bâti tout en améliorant le confort et en réduisant les
                  coûts énergétiques. Nous travaillons en étroite collaboration
                  avec nos clients pour proposer des solutions sur mesure,
                  adaptées à leurs besoins et à leur budget.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Avec notre expertise et notre exigence de{" "}
                  <strong className="text-[--primary-color]">qualité</strong>,
                  vous êtes assuré d'une rénovation d'excellence, tant sur le
                  plan esthétique que structurel.
                </p>
                {/* Call-to-Action */}
                <div className="mt-10">
                  <a className="btn max-w-max uppercase" href="#contactus">
                    Demandez un devis
                  </a>
                </div>
              </div>

              {/* Imagem */}
              <div className="rounded-sm max-w-lg overflow-hidden shadow-md">
                <Image
                  src={RenovatieImage} // Substitua pela imagem correta
                  alt="Renovatie"
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
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Questions fréquentes sur la rénovation
          </h2>

          {/* Lista de Perguntas e Respostas */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels sont les avantages d'une rénovation ?
              </h4>
              <p className="text-gray-700">
                Une rénovation peut considérablement améliorer la valeur, la{" "}
                <strong className="text-[--primary-color]">
                  performance énergétique
                </strong>{" "}
                en la functionaliteit d'un bâtiment, en lui redonnant vie.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels services proposez‑vous pour une rénovation ?
              </h4>
              <p className="text-gray-700">
                Nos services incluent adaptations structurelles, rénovations
                esthétiques, rénovations de toitures, réparations de façades,
                améliorations intérieures et restauration de menuiserie.
              </p>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Pouvez‑vous rénover des bâtiments historiques ?
              </h4>
              <p className="text-gray-700">
                Oui, nous avons de l'expérience dans la conservation et la
                rénovation de bâtiments historiques, en alliant savoir‑faire
                traditionnel et techniques modernes.
              </p>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Comment la rénovation améliore‑t‑elle l'efficacité énergétique ?
              </h4>
              <p className="text-gray-700">
                En utilisant des{" "}
                <strong className="text-[--primary-color]">
                  matériaux durables
                </strong>{" "}
                et des{" "}
                <strong className="text-[--primary-color]">
                  solutions écoénergétiques
                </strong>
                , nous améliorons l'isolation et réduisons les coûts
                énergétiques.
              </p>
            </div>

            {/* Pergunta 5 */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Pourquoi choisir WD Toitures ?
              </h4>
              <p className="text-gray-700">
                Grâce à notre expertise et à notre engagement envers la{" "}
                <strong className="text-[--primary-color]">qualité</strong>,
                nous garantissons des rénovations durables et soignées, adaptées
                à vos attentes.
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
