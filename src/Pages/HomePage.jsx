//layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Logo from "../components/layout/Logo";

// home section
import SectionHero from "../components/home/SectionHero";
import SectionFeatured from "../components/home/SectionFeatured";
import SectionHow from "../components/home/SectionHow";
import SectionMeals from "../components/home/SectionMeals";
import SectionTestimonials from "../components/home/SectionTestimonials";
import SectionPricing from "../components/home/SectionPricing";
import SectionCta from "../components/home/SectionCta";

// style
import Style from "./HomePage.module.css";
function HomePage() {
  return (
    <div>
      <Navbar />
      <SectionHero />
      <SectionFeatured />
      <SectionHow />
      <SectionMeals />
      <SectionTestimonials />
      <SectionPricing />
      <SectionCta />
      <Footer />
    </div>
  );
}

export default HomePage;
