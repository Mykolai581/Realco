import "./App.css";
import Footer from "./components/Footer/Footer";
import HeaderApp from "./components/Header/HeaderApp";
import MainBlogSection from "./components/MainBlogSection/MainBlogSection";
import MainComfortSection from "./components/MainComfortSection/MainComfort";
import MainCustomersSection from "./components/MainCustomersSection/MainCustomersSection";
import MainFamiliesSection from "./components/MainFamiliesSection/MainFamiliesSection";
import MainFindSection from "./components/MainFindSection/MainFindSecton";
import MainLocationsSection from "./components/MainLocationsSection/MainLocationsSection";
import MainLogoSection from "./components/MainLogoSection/MainLogoSection";
import MainPropertiesSection from "./components/MainPropertiesSection/MainPropertiesSection";
import MainQuickSection from "./components/MainQuickSection/MainQuickSection";
import MainWorksSection from "./components/MainWorksSection/MainWorksSection";

export default function App() {
  return (
    <>
      <HeaderApp />
      <main className="main">
        <MainFindSection />
        <MainLogoSection />
        <MainWorksSection />
        <MainComfortSection />
        <MainQuickSection />
        <MainPropertiesSection />
        <MainLocationsSection />
        <MainFamiliesSection />
        <MainCustomersSection />
        <MainBlogSection />
      </main>
      <Footer />
    </>
  );
}
