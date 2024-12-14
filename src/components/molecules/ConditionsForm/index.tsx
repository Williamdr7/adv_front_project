import React, { useEffect } from "react";
import Slider from "rc-slider";
import { motion } from "framer-motion";
import useFormData from "@/hooks/useFormData";
import CustomTabs from "../CustomTabs";
import { usePriceSimulation } from "@/services/bff/signature/getPriceSimulation";
import { useKilometers } from "@/services/bff/signature/getKilometers";
import { formatValueToCurrency } from "@/utils/formatValueToCurrency";
import Button from "@/components/atoms/Button";
import { useNavigate } from "@modern-js/runtime/router";

const bulletPoints = [
  "Regular urban movements with room for additional trips.",
  "Local use and some short weekend trips.",
  "Suitable for those who occasionally travel outside the city.",
];

export default function ConditionsForm() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();
  const { data: kilometers } = useKilometers();

  const query = {
    kilometer_cap_id: formData?.kilometerId ?? kilometers?.[0].kilometer_cap_id,
    category_id: formData?.category?.id ?? undefined,
    model_ids: formData?.models?.map((item: any) => item.value).join(",") ?? "",
  };
  const priceSimulation: any = usePriceSimulation(query);

  const selectedCondition = priceSimulation?.data?.find(
    (item: any) =>
      item.months === Number.parseInt(formData?.contractPeriod?.months),
  );

  const handleKilometerChange = (value: number) => {
    updateFormData({
      ...formData,
      kilometer: kilometers?.find(item => item.value === value),
    });
  };

  const handleContractPeriodChange = (value: string) => {
    updateFormData({
      ...formData,
      contractPeriod: priceSimulation?.data?.find(
        (item: any) => item.months === parseInt(value),
      ),
    });
  };

  useEffect(() => {
    if (priceSimulation?.data?.length && !selectedCondition) {
      updateFormData({
        ...formData,
        contractPeriod: {
          months: priceSimulation?.data[0].months,
          price: priceSimulation?.data[0].price,
        },
      });
    }
  }, [priceSimulation?.data]);

  return (
    <div className="w-full h-full bg-white rounded-[16px] p-8 shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[30px] font-semibold">
          Choose the best{" "}
          <span className="text-primary-5">conditions for you</span>
        </h2>
        <p className="text-neutrals-neutral-5 text-sm">
          Set the best conditions and proceed to upload your vehicle
        </p>
      </motion.div>
      <motion.div
        className="mt-xs"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div>
          <h3 className="text-base font-semibold mb-2">
            Monthly allowance (in km)
          </h3>

          <div className="my-12 px-4">
            <Slider
              ariaValueTextFormatterForHandle={value =>
                `${value % 30 === 0 ? (value / 30).toFixed(0) : (value / 30).toFixed(2)} km/day`
              }
              min={kilometers?.[0].value}
              max={kilometers?.[kilometers.length - 1].value}
              value={formData?.kilometer?.value || kilometers?.[0].value}
              step={500}
              marks={kilometers?.reduce(
                (acc, item, index) => {
                  const isLast = index === kilometers.length - 1;
                  const isFirst = index === 0;
                  acc[item.value] = {
                    label: new Intl.NumberFormat("en-US").format(item.value),
                    style: isLast
                      ? { transform: "translateX(-37px)" }
                      : isFirst
                        ? { transform: "translateX(-5px)" }
                        : {},
                  };
                  return acc;
                },
                {} as Record<
                  number,
                  { label: string; style: React.CSSProperties }
                >,
              )}
              onChange={value => handleKilometerChange(value as number)}
            />
          </div>
        </motion.div>

        <ul className="list-disc px-4">
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <p className="text-neutrals-neutral-5 text-sm">{point}</p>
            </li>
          ))}
        </ul>

        <motion.div className="flex flex-col gap-4 rounded-[24px]">
          <h3 className="text-base font-semibold mb-2 mt-6">
            Suggestion per period
          </h3>
          <div className="flex justify-between">
            <CustomTabs
              tabs={
                priceSimulation?.data?.length
                  ? priceSimulation?.data?.map((item: any) => ({
                      label: (
                        <div className="flex flex-col items-center text-center">
                          {item.months} <br /> months
                        </div>
                      ),
                      value: item.months,
                    }))
                  : []
              }
              selectedTab={formData?.contractPeriod?.months}
              onTabChange={value => handleContractPeriodChange(value)}
              className="h-[92px]"
            />
          </div>

          <div className="bg-secondary-10 p-4 py-8 rounded-[16px] text-center flex flex-col gap-2 mt-2">
            <p className="text-neutrals-neutral-5 text-sm mb-1">
              Subscription fee
            </p>

            <h4 className="text-neutrals-neutral-10 text-h4 font-bold">
              {formatValueToCurrency(selectedCondition?.price?.min_price || 0)}{" "}
              to{" "}
              {formatValueToCurrency(selectedCondition?.price?.max_price || 0)}
            </h4>
            <div className="flex items-center justify-center gap-1 cursor-pointer">
              <p className="text-primary-5 text-sm">Subject to analysis</p>
            </div>
          </div>
        </motion.div>
        <Button
          size="large"
          className="mt-6 h-[50px] ml-auto w-full bg-primary-5 text-white"
          onClick={() => navigate("/renter/success")}
        >
          Go for it!
        </Button>
      </motion.div>
    </div>
  );
}
