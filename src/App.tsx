import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import VirginiaCityStudy from "./pages/VirginiaCityStudy";
import VolunteerHub from "./pages/VolunteerHub";
import Resources from "./pages/Resources";
import CulturalLandscape from "./pages/CulturalLandscape";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Initiatives from "./pages/Initiatives";
import Reports from "./pages/Reports";
import Studies from "./pages/Studies";
import Articles from "./pages/Articles";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ws-virginia-city-2007" element={<VirginiaCityStudy />} />
            <Route path="/participant-info" element={<VolunteerHub />} />
            <Route path="/links" element={<Resources />} />
            <Route path="/cultural-landscape" element={<CulturalLandscape />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
