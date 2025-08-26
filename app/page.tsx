import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Partnership from "@/components/partnership";
import Programs from "@/components/programs";
import Team from "@/components/team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partnership />
      <About />
      <Programs />
      <Team />
      <Contact />
    </main>
  );
}
