import {
  PriceSimulationParams,
  PriceSimulationResponse,
} from "@/models/signatures";

import { useQuery } from "@tanstack/react-query";

export const getPriceSimulation = async (): Promise<PriceSimulationResponse[]> => {
  const priceRanges: PriceSimulationResponse[] = [];

  for (let i = 1; i <= 5; i++) {
    const minPrice = Math.floor(Math.random() * 1000);
    const maxPrice = minPrice + Math.floor(Math.random() * 500);

    priceRanges.push({
      months: i,
      price: {
        min_price: minPrice,
        max_price: maxPrice,
      },
      kilometer_cap: 0,
      kms_id: '',
      months_id: '',
    });
  }

  return priceRanges;
};

export const usePriceSimulation = (params?: PriceSimulationParams) => {
  return useQuery({
    queryKey: ["price-simulation", params],
    queryFn: () =>
      params?.kilometer_cap_id && params.category_id
        ? getPriceSimulation()
        : {},
    enabled: !!params?.category_id,
  });
};
