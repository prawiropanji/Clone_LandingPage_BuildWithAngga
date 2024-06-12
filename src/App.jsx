import "./App.css";
import Navbar from "./components/Navbar";
import BannerProvider from "./stores/Banner-context";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import HeroLogos from "./components/HeroLogos";
import FeatureOne from "./components/FeatureOne";
import ThumbnailSection from "./components/ThumbnailSection";
import MasteringToolPart from "./components/MasteringToolPart";
import FeatureTwo from "./components/FeatureTwo";
import Testimonial from "./components/Testimonial";
import Faq from "./components/FAQ";
import MentorSection from "./components/MentorSection";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "./components/NavbarMobile";
import HeroMobile from "./components/HeroMobile";
import CourseCategoriesMobile from "./components/CourseCategoriesMobile";
import AdviceMobile from "./components/AdviceMobile";
import ThumbnailMobile from "./components/ThumbnailMobile";
import CatalogButtons from "./components/CatalogButtons";
import SearchModalProvider from "./components/stores/SearchModalContext";

function App() {

  const isDesktopScreen = useMediaQuery({ query: '(min-width: 575px)' })

  console.log('desktop screen',isDesktopScreen)
  
  return (
    <>
    {isDesktopScreen && ( <>
    <BannerProvider>
        <Banner />
        <Navbar />
      </BannerProvider>

      <main className="px-20 overflow-hidden 07sz:overflow-visible 10sz:px-10 13sz:px-0">
        <Hero />
        <HeroLogos />
        <FeatureOne />
        <ThumbnailSection />
        <MasteringToolPart />
        <FeatureTwo />
      </main>
      <Testimonial/>
      <footer className="px-20 10sz:px-10 13sz:px-0">
        <Faq/>
        <MentorSection/>
        <Footer/>
      </footer>
      </>)}
     

      {!isDesktopScreen && <>
       <SearchModalProvider>
          <NavbarMobile/>
          <HeroMobile/>
       </SearchModalProvider>
        <div className="px-4">
          <CourseCategoriesMobile/>
          <AdviceMobile/>
          <ThumbnailMobile/>
          <CatalogButtons/>
          <MasteringToolPart/>
          <MentorSection/>
        </div>
        <footer className="px-4 pt-2 bg-white">
          <Footer/>
        </footer>
      </>}

    </>
  );
}

export default App;
