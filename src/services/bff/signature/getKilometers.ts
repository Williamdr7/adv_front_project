import { useQuery } from "@tanstack/react-query";

export const useKilometers = () => {
  return useQuery({
    queryKey: ["kilometers"],
    queryFn: () => [
      {
        value: 1000,
        kilometer_cap_id: "32440010-f6d7-41c2-adf1-261ec64f4e9c",
      },
      {
        value: 1500,
        kilometer_cap_id: "64def279-66c3-4969-904b-b3020e7210a3",
      },
      {
        value: 2000,
        kilometer_cap_id: "5ee28983-2d76-4c58-93c5-e87c39097c34",
      },
      {
        value: 2500,
        kilometer_cap_id: "5b3a9028-1898-4011-a1a3-c30f38d59cc9",
      },
      {
        value: 3000,
        kilometer_cap_id: "c15c4c25-9e24-4a5e-a934-132954b8a687",
      },
    ],
  });
};
