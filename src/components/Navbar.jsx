import { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ cartCount, onSearch, selectedPhones, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const toggleCart = () => setShowCart(!showCart);

  return (
    <nav className="bg-white shadow-md w-full px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">📱 PhoneStore</div>

      {/* Search */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-1 w-80 bg-gray-100">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search phones..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            onSearch(e.target.value);
          }}
          className="bg-transparent outline-none flex-grow text-sm"
        />
      </div>

      {/* Icons */}
      <div className="relative flex items-center space-x-6">
        {/* Cart */}
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-600" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Cart Dropdown */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-12 w-72 bg-white border rounded-md shadow-lg p-4 z-50 max-h-96 overflow-y-auto"
            >
              <h3 className="font-semibold mb-2">Your Cart</h3>
              {selectedPhones.length === 0 ? (
                <p className="text-sm text-gray-500">No items in cart.</p>
              ) : (
                selectedPhones.map((phone, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-12 h-12 rounded object-cover border mr-3"
                    />
                    <div className="flex-grow">
                      <p className="text-sm font-medium">{phone.name}</p>
                      <p className="text-xs text-gray-500">₹{phone.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Profile */}
        <FaUserCircle className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
      </div>
    </nav>
  );
}