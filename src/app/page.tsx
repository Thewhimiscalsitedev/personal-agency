// Trigger redeploy
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="flex flex-col">
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}
