import { motion } from "framer-motion";
import logo from "@/assets/logo.webp";
import { Link, useNavigate } from "@modern-js/runtime/router";
import { useLocation } from "@modern-js/runtime/router";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const pagesWithoutNavigation = ["/login", "/register"];

  if (pagesWithoutNavigation.includes(location.pathname)) {
    return null;
  }

  return (
    <motion.header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 md:bg-transparent shadow-md">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>
      <nav className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        <motion.a
          href="/vehicles"
          className="text-center md:text-left w-full md:w-auto text-secondary-5 hover:text-primary-7 transition duration-300 p-2 bg-white md:bg-transparent shadow-sm md:shadow-none rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Rent a Car
        </motion.a>
        <motion.a
          href="/renter/personal-data"
          className="text-center md:text-left w-full md:w-auto text-secondary-5 hover:text-primary-7 transition duration-300 p-2 bg-white md:bg-transparent shadow-sm md:shadow-none rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          List a Car
        </motion.a>
        <motion.a
          href="/negotiations"
          className="text-center md:text-left w-full md:w-auto text-secondary-5 hover:text-primary-7 transition duration-300 p-2 bg-white md:bg-transparent shadow-sm md:shadow-none rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Negotiations
        </motion.a>
        <motion.a
          href="/about"
          className="text-center md:text-left w-full md:w-auto text-secondary-5 hover:text-primary-7 transition duration-300 p-2 bg-white md:bg-transparent shadow-sm md:shadow-none rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About Us
        </motion.a>
        <motion.a
          href="/contact"
          className="text-center md:text-left w-full md:w-auto text-secondary-5 hover:text-primary-7 transition duration-300 p-2 bg-white md:bg-transparent shadow-sm md:shadow-none rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
        {token && (
          <motion.a
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("formData");
              navigate("/login");
            }}
            className="text-center md:text-left w-full md:w-auto text-secondary-5 hover:text-primary-7 transition duration-300 p-2 bg-white md:bg-transparent shadow-sm md:shadow-none rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.a>
        )}
      </nav>
    </motion.header>
  );
}
