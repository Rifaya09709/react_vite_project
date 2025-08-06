import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollingLogos from "./components/ScrollingLogos";
import Sales from "./components/Sales";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollDot from "./components/ScrollDot";

export default function App() {
  const [selectedPhones, setSelectedPhones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Add to Cart
  const handleAdd = (phone) => {
    if (!selectedPhones.find((item) => item.id === phone.id)) {
      setSelectedPhones([...selectedPhones, phone]);
    }
  };

  // ✅ Handle Search (this was missing!)
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // ✅ AOS Animation
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans scroll-smooth">
      
      <Navbar
        cartCount={selectedPhones.length}
        selectedPhones={selectedPhones}
        removeFromCart={(index) => {
          const newPhones = [...selectedPhones];
          newPhones.splice(index, 1);
          setSelectedPhones(newPhones);
        }}
        onSearch={handleSearch} // Now correctly defined
      />

      
      <Hero />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ScrollingLogos />
      </div>

      
     <Sales
  searchTerm={searchTerm}
  handleSearch={(value) => setSearchTerm(value)}
  selectedPhones={selectedPhones}
  handleAdd={handleAdd}
/>

      
      <Features />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollDot />
    </div>
  );
}