import Image from "next/image";
import GevelbekledingImage from "@/public/images/services/gevelbekleding/image1.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Gevelbekleding() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-32">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">
              Revêtement de façade
            </h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  La <strong className="text-[--primary-color]">façade</strong>{" "}
                  d'un bâtiment joue un rôle crucial tant pour l'apparence que
                  pour la protection contre les agressions extérieures. Chez{" "}
                  <strong className="text-[--primary-color]">
                    WD Toitures
                  </strong>
                  , nous sommes spécialisés dans la pose de revêtements de
                  façade qui améliorent l'esthétique de votre habitation ou de
                  votre bâtiment professionnel tout en offrant une protection
                  durable contre les intempéries.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Nous proposons un large choix de matériaux pour le revêtement
                  de façade — bois, composite ou panneaux métalliques — choisis
                  selon vos préférences et les contraintes du bâtiment. Que vous
                  souhaitiez une apparence moderne ou préserver un caractère
                  traditionnel, nous assurons une finition soignée adaptée au
                  style de votre bien.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Le revêtement de façade assure une isolation renforcée et une
                  protection contre la pluie, le vent et le soleil, garantissant
                  une longue durabilité. Nous travaillons en étroite
                  collaboration avec vous pour que votre façade soit à la fois
                  fonctionnelle, esthétiquement réussie et durable, quelles que
                  soient les conditions climatiques.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Soucieux du détail et du savoir‑faire, nous veillons à ce que
                  la façade de votre bâtiment soit non seulement esthétique,
                  mais aussi parfaitement protégée.
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
                  src={GevelbekledingImage} // Substitua pela imagem correta
                  alt="Revêtement de façade"
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
            Questions fréquentes sur le revêtement de façade
          </h2>

          {/* Lista de Perguntas e Respostas */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Qu'est‑ce que le revêtement de façade ?
              </h4>
              <p className="text-gray-700">
                Le revêtement de façade est une couche protectrice et décorative
                appliquée à l'extérieur d'un bâtiment. Il améliore l'apparence
                en plus de protéger contre les intempéries telles que la pluie,
                le vent et le soleil.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels matériaux peuvent être utilisés pour le revêtement de
                façade ?
              </h4>
              <p className="text-gray-700">
                Nous proposons une large gamme de matériaux, notamment le{" "}
                <strong className="text-[--primary-color]">bois</strong>, le{" "}
                <strong className="text-[--primary-color]">composite</strong> et
                les{" "}
                <strong className="text-[--primary-color]">
                  panneaux métalliques
                </strong>
                . Chaque matériau présente des avantages spécifiques et est
                sélectionné en fonction de vos préférences et des exigences du
                bâtiment.
              </p>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Comment entretenir le revêtement de façade ?
              </h4>
              <p className="text-gray-700">
                L'entretien dépend du matériau utilisé. Le bardage en bois
                nécessite par exemple un entretien régulier (peinture,
                traitement), tandis que le composite et les panneaux métalliques
                demandent peu d'entretien. Nous vous conseillons volontiers sur
                l'entretien adapté.
              </p>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Le revêtement de façade convient‑il à tous les bâtiments ?
              </h4>
              <p className="text-gray-700">
                Oui, le revêtement de façade peut être appliqué sur des
                bâtiments neufs comme existants. Nous proposons une solution qui
                s'adapte parfaitement au style et à la structure de votre bien.
              </p>
            </div>

            {/* Pergunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels sont les avantages du revêtement de façade ?
              </h4>
              <p className="text-gray-700">
                Le revêtement de façade offre une excellente isolation, une
                protection contre les intempéries et une grande durabilité. De
                plus, il améliore l'esthétique de votre bâtiment.
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
