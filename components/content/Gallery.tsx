// Used in Home page
"use client";

import { useState } from "react";
import { Syne } from "next/font/google";

import Filter from "../common/Filter";
import ModifyButton from "../common/ModifyButton";
import GalleryPicture from "../common/GalleryPicture";
import PicturesData from "../../data/galleryPicturesData.json";

const syne = Syne({ subsets: ["latin"] });

export default function Gallery() {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [activeFilter, setActiveFilter] = useState<string | null>("Tous");

    // Simulated Frontend Fonction ( DELETE AFTER BACKEND)
    const toggleLogin = () => setIsUserLogged(!isUserLogged);

    function handleFilter(category: string) {
        setActiveFilter(category);
    }

    // Extract categories from Json
    const categories = [
        "Tous",
        ...Array.from(new Set(PicturesData.map((picture) => picture.category))),
    ];

    return (
        <section id="gallery">
            <div className="flex flex-col justify-center gap-3">
                <h2 className={`${syne.className} title`}>Mes projets</h2>

                {/*  Simulated Frontend Button ( DELETE AFTER BACKEND) */}
                <button
                    onClick={toggleLogin}
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                >
                    {isUserLogged ? "Déconnexion" : "Connexion"}
                </button>
                {/*  end */}
                {isUserLogged && <ModifyButton />}
            </div>

            {/* Filter buttons */}
            <div
                className="flex flex-col md:flex-row md:justify-center
            gap-7 mt-12 w-3/4 mx-auto md:w-full"
            >
                {categories.map((category, index) => (
                    <Filter
                        key={index}
                        category={category}
                        isActive={activeFilter === category}
                        onToggle={() => handleFilter(category)}
                    />
                ))}
            </div>

            {/* Pictures Grid */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-4 mt-12"
            >
                {PicturesData.filter(
                    (picture) =>
                        activeFilter === "Tous" ||
                        picture.category === activeFilter
                ).map((picture) => (
                    <GalleryPicture key={picture.id} pictures={[picture]} />
                ))}
            </div>
        </section>
    );
}
