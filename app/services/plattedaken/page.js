import Image from "next/image";
import PlattedakenImage from "@/public/images/services/plateforme.webp";

import ContactForm from "@/components/contactform";
import Testimonials from "@/components/testimonials";
import Whyus from "@/components/whyus";

export default function Plattedaken() {
  return (
    <div className="">
      {/* main */}
      <section className="container mx-auto max-w-screen-xl pt-32">
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Título */}
            <h2 className="h2 font-bold !text-[--primary-color]">
              Toits plats
            </h2>

            {/* Conteúdo com Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-gray-700 p small leading-relaxed">
                  Les{" "}
                  <strong className="text-[--primary-color]">
                    toits plats
                  </strong>{" "}
                  sont idéals si vous recherchez un design simple et
                  fonctionnel. L'isolation est posée directement sur la
                  structure et recouverte d'une membrane étanche, offrant une
                  excellente résistance à l'eau et aux variations de
                  température.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Un point important est l'évacuation des eaux pluviales. Pour
                  éviter les fuites, nous créons une pente discrète et
                  installons des évacuations adaptées pour diriger l'eau vers
                  les gouttières et les drains.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Nous proposons deux options de couverture :{" "}
                  <strong className="text-[--primary-color]">EPDM</strong>, un
                  caoutchouc synthétique résistant aux UV, et{" "}
                  <strong className="text-[--primary-color]">bitume</strong>,
                  offrant une durée de vie supérieure à 30 ans. Les deux
                  solutions garantissent une toiture durable et protégée des
                  intempéries.
                </p>
                <p className="text-gray-700 p small leading-relaxed">
                  Dankzij onze ervaring kunt u rekenen op de zekerheid van een
                  goed gebouwd en hoogwaardig plat dak.
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
                  src={PlattedakenImage} // Substitua pela imagem correta
                  alt="Platte daken"
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
            Questions fréquentes sur les toits plats
          </h2>

          {/* Lista de Perguntas e Respostas */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Pergunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels sont les avantages d'un toit plat ?
              </h4>
              <p className="text-gray-700">
                Les toits plats offrent un design simple et fonctionnel, une
                bonne résistance à l'eau et aux variations thermiques, et sont
                faciles à entretenir.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Comment wordt de afwatering van regenwater geregeld bij een plat
                dak?
              </h4>
              <p className="text-gray-700">
                Pour éviter les fuites, wij zorgen voor een subtiele helling die
                met het blote oog niet zichtbaar is en installeren we geschikte
                waterafvoeren om het snel naar de afvoer en goten te leiden.
              </p>
            </div>

            {/* Pergunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Quels materialen worden gebruikt voor dakbedekking van platte
                daken?
              </h4>
              <p className="text-gray-700">
                Wij bieden twee opties:{" "}
                <strong className="text-[--primary-color]">EPDM</strong>, een
                synthetisch rubber dat bestand is tegen UV-straling, en{" "}
                <strong className="text-[--primary-color]">
                  bitumen dakbedekking
                </strong>
                , met een levensduur van meer dan 30 jaar.
              </p>
            </div>

            {/* Pergunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Un plat dak geschikt voor alle gebouwen?
              </h4>
              <p className="text-gray-700">
                Ja, platte daken kunnen worden toegepast op zowel nieuwe als
                bestaande gebouwen. Wij zorgen voor een oplossing die perfect
                aansluit bij de stijl en structuur van uw pand.
              </p>
            </div>

            {/* Pergunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-[--primary-color] mb-2">
                Wat zijn de belangrijkste aandachtspunten bij een plat dak?
              </h4>
              <p className="text-gray-700">
                Les points clés zijn een goede afwatering, hoogwaardige
                dakbedekking en regelmatig onderhoud om de levensduur van het
                dak te garanderen.
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
