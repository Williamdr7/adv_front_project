import type { Category } from "@/types/vehicle";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { formatValueToCurrencyWithDecimals } from "@/utils/formatValueToCurrency";
import Button from "@/components/atoms/Button";

type CategoryCardProps = {
  category: Category;
  onSelect: () => void;
};

export default function VehicleCard({ category, onSelect }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex h-[520px] flex-1 flex-col items-center p-4 rounded-[24px] shadow-[0px_4px_8px_0px_#00000014] bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[120px] flex items-center my-8">
        <img
          className="object-cover mb-4"
          src={category.image}
          alt={category.description}
          width={200}
          height={120}
        />
      </div>
      <p className="text-center text-lg font-semibold">{category.name}</p>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-2 mt-6 max-w-[80%] h-[100px]"
      >
        <p className="text-neutrals-neutral-5 text-sm">
          {category.description}
        </p>
      </motion.div>
      <div className="flex flex-col justify-between h-full w-full">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -70 : 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center p-${isHovered ? "0" : "8"}`}
        >
          <p className="text-center text-sm font-semibold">
            from <br />
          </p>
          <p className="text-primary-5 text-4xl font-semibold">
            {formatValueToCurrencyWithDecimals(category.price.min_price)}
            <br />
          </p>
          <p className="text-center text-sm font-semibold">per month</p>
        </motion.div>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Button
              size="large"
              className="w-full bg-primary-5 text-white"
              onClick={onSelect}
            >
              Select
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
