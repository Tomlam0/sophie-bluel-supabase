import dynamic from "next/dynamic";

import Hero from "@/components/content/Hero";
const Gallery = dynamic(() => import("@/components/content/Gallery"));
const ContactForm = dynamic(() => import("@/components/forms/ContactForm"));

export default function Home() {
  return (
    <main className="flex flex-col gap-20 lg:gap-36">
      <Hero />
      <Gallery />
      <ContactForm />
    </main>
  );
}
