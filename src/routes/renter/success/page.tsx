import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/molecules/Header";
import success from "@/assets/success.png";

export default function Success() {
  return (
    <>
      <Header />{" "}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[50%] flex flex-col gap-6"
        >
          <h3 className="font-semibold text-2xl">
            Thank you <br />
            for choosing <span className="text-primary-5">GoDrive!</span>
          </h3>
          <p className="text-neutrals-neutral-5 text-lg">
            Your vehicle has been added to our catalog, <br /> and you will
            receive proposals shortly.
          </p>
        </motion.div>
        <img className="w-full md:w-[50%]" src={success} alt="Success" />
      </div>
    </>
  );
}
