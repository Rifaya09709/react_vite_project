import { motion, AnimatePresence } from "framer-motion";
import iphone from "../assets/phone19.jpg";
import samsung from "../assets/phone2.jpg";
import pixel from "../assets/phone3.jpg";
import oneplus from "../assets/phone4.jpg";
import oppo from "../assets/phone6.png";
import infinix from "../assets/phone17.jpg";
import honor from "../assets/phone11.jpg";
import motorola from "../assets/phone12.jpg";

export default function Sales({ searchTerm, handleSearch, selectedPhones, handleAdd }) {
  const phones = [
    { id: 1, name: "iPhone 14", price: "₹79,000", image: iphone },
    { id: 2, name: "Samsung Galaxy S23", price: "₹74,999", image: samsung },
    { id: 3, name: "Google Pixel 7", price: "₹59,999", image: pixel },
    { id: 4, name: "OnePlus 11", price: "₹61,999", image: oneplus },
    { id: 5, name: "Oppo Reno 10", price: "₹35,999", image: oppo },
    { id: 6, name: "Infinix Zero 30", price: "₹45,999", image: infinix },
    { id: 9, name: "Honor 90", price: "₹25,999", image: honor },
    { id: 10, name: "Motorola Edge 40", price: "₹45,999", image: motorola },
  ];

  const filteredPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10 px-4 md:px-16 bg-gray-100" id="sales">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-center mt-1 mb-6 text-gray-800"
        data-aos="fade-up"
      >
        🔥 Phones on Sale
      </h2>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-8" data-aos="fade-up">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search phones..."
          className="w-full max-w-md p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {filteredPhones.map((phone) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform"
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{phone.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{phone.price}</p>
                <button
                  onClick={() => handleAdd(phone)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No results message */}
      {filteredPhones.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No phones found.</p>
      )}
    </section>
  );
}