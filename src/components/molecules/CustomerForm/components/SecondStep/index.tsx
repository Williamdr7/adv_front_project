import React, { useEffect, useState } from "react";
import RadioGroup from "@/components/molecules/RadioGroup";
import { motion } from "framer-motion";
import useFormData from "@/hooks/useFormData";
import { useNavigate } from "@modern-js/runtime/router";
import Button from "@/components/atoms/Button";

export default function SecondStep({ goBack }: { goBack: () => void }) {
  const { formData, submitFormData } = useFormData();
  const [hasFullInsurance, setHasFullInsurance] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const payload = {
      ...formData,
      full_insurance: hasFullInsurance === "YES",
    };

    await submitFormData(payload);

    navigate("/renter/vehicle");
  };

  const handleInsuranceChange = (insurance: "YES" | "NO") => {
    setHasFullInsurance(insurance);
  };

  useEffect(() => {
    setHasFullInsurance(
      formData?.full_insurance !== undefined
        ? formData?.full_insurance
          ? "YES"
          : "NO"
        : "",
    );
  }, [formData]);

  return (
    <div className="w-full md:w-[528px] pt-2 md:min-h-[397px] bg-gradient-to-b from-neutrals-neutral-9 to-white rounded-[24px]">
      <div className="mx-auto bg-neutrals-neutral-8 w-[100px] h-[5px] rounded-[16px]">
        <motion.div
          className="mt-8 h-full bg-primary-5 rounded-[16px]"
          initial={{ width: "50%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div
        className="p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-secondary-5 text-2xl font-semibold mb-4">
          To get started, we will <br /> need{" "}
          <span className="text-primary-5">some information</span>
        </span>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 p-3 mx-4 rounded-[24px] bg-white shadow-[0px_4px_8px_0px_#00000014]"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-neutrals-neutral-6 text-sm">
          Does the car have full insurance?
        </span>
        <RadioGroup
          options={[
            { id: "YES", value: "YES", label: "Yes" },
            { id: "NO", value: "NO", label: "No" },
          ]}
          selectedValue={hasFullInsurance}
          onChange={value => handleInsuranceChange(value as "YES" | "NO")}
        />
        <div className="w-auto flex gap-4 ml-auto mt-6">
          <Button onClick={goBack}>Back</Button>
          <Button onClick={onSubmit} disabled={!hasFullInsurance} size="large">
            Next
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
