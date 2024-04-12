// Used in Home page

import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });

export default function Hero() {
    return (
        <section
            className="flex flex-col items-center lg:flex-row
            gap-16 mt-16 md:mt-32 "
        >
            <Image
                src="/images/sophie-bluel.webp"
                width={474}
                height={355}
                alt="Sophie Bluel"
                priority={true}
            />

            {/* Text block */}
            <div
                className="flex flex-col text-center lg:items-start lg:text-start 
                w-3/4 gap-5 md:w-4/6"
            >
                <h1 className={`${syne.className} title`}>
                    Designer d&apos;espace
                </h1>
                <p className="text-sm">
                    Je raconte votre histoire, je valorise vos idées. Je vous
                    accompagne de la conception à la livraison finale du
                    chantier.
                </p>
                <p className="text-sm">
                    Chaque projet sera étudié en commun, de façon à mettre en
                    valeur les volumes, les matières et les couleurs dans le
                    respect de l’esprit des lieux, et le choix adapté des
                    matériaux. Le suivi du chantier sera assuré dans le souci du
                    détail, le respect du planning et du budget.
                </p>
                <p className="text-sm ">
                    En cas de besoin, une équipe pluridisciplinaire peut être
                    constituée : architecte DPLG, décorateur(trice).
                </p>
            </div>
        </section>
    );
}
