
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedBooks from "@/components/sections/FeaturedBooks"
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedBooks/>
      <Testimonials />
      <Newsletter />
    </main>
  );
}
