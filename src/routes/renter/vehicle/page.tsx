import VehicleCard from "@/components/molecules/VehicleCard";
import { getCategories } from "@/services/bff/signature/getCategories";
import { Category } from "@/types/vehicle";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useFormData from "@/hooks/useFormData";
import CustomTabs from "@/components/molecules/CustomTabs";
import Header from "@/components/molecules/Header";
import VehicleForm from "@/components/molecules/VehicleForm";

export default function Vehicle() {
  const [vehicleFormVisible, setVehicleFormVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const { formData, updateFormData } = useFormData();
  const { data: categories }: UseQueryResult<Category[]> = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const handleSelectCategory = (category: Category) => {
    updateFormData({
      ...formData,
      category: category,
    });
    setVehicleFormVisible(true);
  };

  return (
    <>
      <VehicleForm
        visible={vehicleFormVisible}
        onClose={() => setVehicleFormVisible(false)}
      />
      <Header />
      <motion.div
        className="flex flex-col items-center w-full bg-gradient-to-b from-neutrals-neutral-0 to-white  p-6 pt-[42px]  rounded-[24px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-neutrals-neutral-10 text-[30px] font-semibold text-center">
          What type of vehicle <br />{" "}
          <strong className="text-primary-5">do you have?</strong>
        </h2>
        <div className="mt-xs" />
        <motion.div
          className="w-[50%] flex  bg-neutrals-neutral-9 rounded-[14px] p-1"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CustomTabs
            tabs={[
              { label: "All", value: "ALL" },
              { label: "Manual", value: "MANUAL" },
              { label: "Automatic", value: "AUTOMATIC" },
            ]}
            selectedTab={selectedFilter}
            onTabChange={setSelectedFilter}
          />
        </motion.div>
        <div className="mt-xxs" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories
            ?.filter(
              category =>
                selectedFilter === "ALL" ||
                (selectedFilter === "AUTOMATIC"
                  ? category.name.includes("Automatic")
                  : !category.name.includes("Automatic")),
            )
            .map((category: Category) => (
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                key={category.id}
                onClick={() => handleSelectCategory(category)}
                layout
              >
                <VehicleCard
                  onSelect={() => handleSelectCategory(category)}
                  category={category}
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </>
  );
}
