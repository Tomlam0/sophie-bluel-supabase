// Used in Home page

import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="mt-16 flex select-none flex-col items-center gap-16 md:mt-32 lg:flex-row ">
      <Image
        src="/images/sophie-bluel.webp"
        width={474}
        height={355}
        alt="Sophie Bluel"
        priority={true}
        draggable={false}
      />

      {/* Text block */}
      <div className="flex w-3/4 flex-col gap-5 text-center md:w-4/6 lg:items-start lg:text-start">
        <h1 className={`${syne.className} title`}>Designer d&apos;espace</h1>
        <p className="text-sm">
          Je raconte votre histoire, je valorise vos idées. Je vous accompagne
          de la conception à la livraison finale du chantier.
        </p>
        <p className="text-sm">
          Chaque projet sera étudié en commun, de façon à mettre en valeur les
          volumes, les matières et les couleurs dans le respect de l’esprit des
          lieux, et le choix adapté des matériaux. Le suivi du chantier sera
          assuré dans le souci du détail, le respect du planning et du budget.
        </p>
        <p className="text-sm ">
          En cas de besoin, une équipe pluridisciplinaire peut être constituée :
          architecte DPLG, décorateur(trice).
        </p>
      </div>
    </section>
  );
}
