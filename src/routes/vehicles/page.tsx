import VehicleCard from "@/components/molecules/VehicleCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "@modern-js/runtime/router";
import { useQuery } from "@tanstack/react-query";
import vehiclesData from "@/data/vehicles.json";
import ProposalModal from "@/components/molecules/ProposalModal";
import useFormData from "@/hooks/useFormData";

export default function VehiclesPage() {
  const { formData, updateFormData } = useFormData();
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const { data: vehicles, isLoading } = useQuery({
    queryKey: ["vehicles", search],
    queryFn: () => {
      return vehiclesData
        .filter(vehicle =>
          vehicle.title.toLowerCase().includes(search.toLowerCase()),
        )
        .map(vehicle => ({
          id: vehicle.title,
          name: vehicle.title,
          description: vehicle.class,
          image: vehicle.image,
          popular_vehicles: [],
          price: {
            min_price: Math.floor(Math.random() * 20000) + 1000,
            max_price: Math.floor(Math.random() * 20000) + 5000,
          },
          vehicle_transmission: null,
          eligible_for_armoured: false,
        }));
    },
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    navigate(`/vehicles?search=${value}`);
  };

  const onSelectVehicle = (vehicle: any) => {
    updateFormData({
      ...formData,
      vehicle,
    });
    setIsModalVisible(true);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    setSearch(searchParam || "");
  }, []);

  return (
    <>
      <motion.div
        className="flex flex-col items-center w-full p-6 pt-[42px] rounded-[24px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-neutrals-neutral-10 text-[30px] font-semibold text-center">
          Available Vehicles
        </h2>
        <input
          type="text"
          placeholder="Search for a vehicle"
          className="mt-4 p-2 border border-gray-300 rounded-md w-full md:w-1/2"
          value={search}
          onChange={e => handleSearchChange(e.target.value)}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {vehicles?.map((vehicle: any) => (
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                key={vehicle.id}
                onClick={() => onSelectVehicle(vehicle)}
              >
                <VehicleCard
                  onSelect={() => onSelectVehicle(vehicle)}
                  category={vehicle}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      <ProposalModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
}
