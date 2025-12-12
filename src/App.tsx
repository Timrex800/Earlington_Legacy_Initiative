import { Helmet } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ImpactStats from "./components/sections/ImpactStats";
import ImpactFeature from "./components/sections/ImpactFeature";
import LegacyWall from "./components/sections/LegacyWall";
import StrategicPillars from "@/components/sections/StrategicPillars";
import About from "@/components/sections/About";
import UbuntuBridge from "@/components/sections/UbuntuBridge";
import ImpactTransparency from "@/components/sections/ImpactTransparency";
import Contact from "@/components/sections/Contact";
import DonationFlow from "@/components/features/DonationFlow";
import Volunteer from "@/components/sections/Volunteer";
import Leadership from "@/components/sections/Leadership";
import TeacherRecognition from "@/components/sections/TeacherRecognition";


function App() {
  // CRITICAL FIX: Updated JSON-LD to use the live domain (earlingtonlegacy.org.za)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Earlington Legacy Initiative NPC",
    url: "https://earlingtonlegacy.org.za/", // FIXED: Use live domain
    logo: "https://res.cloudinary.com/drj03twbh/image/upload/v1761950572/Earlington%20Legacy%20Initiative%20LOGO.png",
    description:
      "Transforming Earlington Secondary School into a centre of excellence.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 Gildcroft Close",
      addressLocality: "Phoenix",
      postalCode: "4068",
      addressCountry: "ZA",
    },
    potentialAction: {
      "@type": "DonateAction",
      target: "https://earlingtonlegacy.org.za/#donate", // FIXED: Use live domain
      name: "Donate to Earlington Legacy Initiative",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <ImpactFeature />
        <TeacherRecognition />
        <LegacyWall />
        <StrategicPillars />
        <About />
        <UbuntuBridge />
        <ImpactTransparency />
        <DonationFlow />
        <Volunteer />
        <Leadership />
        <Contact />
      </main>


      <Footer />
    </div>
  );
}

export default App;
