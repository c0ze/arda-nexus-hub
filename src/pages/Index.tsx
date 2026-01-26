import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import MusicProjects from "@/components/MusicProjects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <MusicProjects />
      <Footer />
    </main>
  );
};

export default Index;
