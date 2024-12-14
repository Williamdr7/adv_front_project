import { useQuery } from "@tanstack/react-query";
import categoriesData from "@/data/categories.json";


export const getCategories = async (
): Promise<any> => {
    return categoriesData;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};
