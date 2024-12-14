import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-primary-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg text-center mb-4 max-w-2xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to our flexible vehicle rental platform! We believe in
        empowering our users to take control of their transportation needs. Our
        service allows individuals to list their vehicles for rent, providing a
        unique opportunity for both vehicle owners and renters to connect and
        benefit from a shared economy.
      </motion.p>
      <motion.p
        className="text-lg text-center mb-4 max-w-2xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Whether you need a car for a day, a week, or longer, our platform offers
        a wide variety of vehicles to suit your needs. From compact cars to
        spacious SUVs, you can find the perfect ride for your next adventure.
        Our user-friendly interface makes it easy to browse, book, and manage
        your rentals.
      </motion.p>
      <motion.p
        className="text-lg text-center mb-4 max-w-2xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        For vehicle owners, our platform provides a hassle-free way to earn
        extra income by renting out their vehicles when they are not in use. We
        prioritize safety and security, ensuring that all transactions are
        secure and that both renters and owners can have peace of mind.
      </motion.p>
      <motion.p
        className="text-lg text-center mb-4 max-w-2xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Join us in revolutionizing the way people think about vehicle rentals.
        Together, we can create a more sustainable and flexible transportation
        solution for everyone. Thank you for choosing us as your trusted partner
        in mobility!
      </motion.p>
    </div>
  );
};

export default AboutPage;
