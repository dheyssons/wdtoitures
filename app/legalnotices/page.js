export default function LegalNotices() {
  return (
    <section className="container mx-auto max-w-screen-xl py-12 px-4 pt-40">
      <h1 className="h2 font-bold text-[--primary-color] mb-8">
        Mentions légales
      </h1>

      <div className="space-y-6">
        <p className="text-gray-700">
          Ce site est la propriété et est géré par <strong>WD Toitures</strong>.
          En utilisant ce site, vous acceptez les conditions suivantes.
        </p>

        <h2 className="text-xl font-semibold text-[--primary-color]">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-700">
          Tout le contenu de ce site, y compris textes, images, logos et
          designs, est protégé par des droits d'auteur et autres droits de
          propriété intellectuelle. Toute reproduction ou distribution non
          autorisée est strictement interdite.
        </p>

        <h2 className="text-xl font-semibold text-[--primary-color]">
          Responsabilité
        </h2>
        <p className="text-gray-700">
          Bien que nous nous efforcions de maintenir les informations de ce site
          exactes et à jour, nous déclinons toute responsabilité en cas
          d'erreurs ou d'omissions. L'utilisation de ce site se fait à vos
          risques et périls.
        </p>

        <h2 className="text-xl font-semibold text-[--primary-color]">
          Liens externes
        </h2>
        <p className="text-gray-700">
          Ce site peut contenir des liens vers des sites externes. Nous ne
          sommes pas responsables du contenu ou de la politique de
          confidentialité de ces sites.
        </p>
      </div>
    </section>
  );
}
