import React, { useState } from "react";
import { motion } from "framer-motion";
import favicon from "../assets/favicon.ico";
import mockImage from "../assets/find-a-car.jpg";
import { Helmet } from "@modern-js/runtime/head";
import { useNavigate } from "@modern-js/runtime/router";
import useFormData from "@/hooks/useFormData";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const _formData = useFormData();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/vehicles?search=${search}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-8">
      <Helmet>
        <link rel="icon" type="image/x-icon" href={favicon} />
        <title>GoDrive - Rent a car near you</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-4 text-secondary-5">
        Find the <span className="text-primary-5">Perfect Car</span>
        <br />
        or List <span className="text-primary-5">your Car</span>
      </h1>
      <p className="text-sm text-center text-secondary-5 mb-6 max-w-[50%]">
        List your car for rent or choose from a variety of available vehicles.
        GoDrive makes car rental easy by connecting you to amazing
        opportunities!
      </p>
      <motion.div
        className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${mockImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          Rent a car near you
        </h1>
        <input
          type="text"
          placeholder="Search for a car"
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/2 mb-4"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-primary-5 text-white py-2 px-4 rounded-md"
        >
          Search
        </button>
      </motion.div>
    </div>
  );
};

export default HomePage;
