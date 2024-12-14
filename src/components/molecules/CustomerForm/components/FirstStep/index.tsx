import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import RadioGroup from "@/components/molecules/RadioGroup";
import { motion } from "framer-motion";
import useFormData from "@/hooks/useFormData";

import TextField from "@/components/atoms/TextField";
import Button from "@/components/atoms/Button";

export default function FirstStep({
  setSecondStep,
}: {
  setSecondStep: (value: boolean) => void;
}) {
  const { formData, submitFormData } = useFormData();

  const { control, handleSubmit, watch, reset } = useForm<any>({});

  const onSubmit = async () => {
    setSecondStep(true);
  };

  useEffect(() => {
    if (formData) {
      reset({
        ...formData?.lead,
        personType: formData?.lead?.type,
      });
    }
  }, [formData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-[568px] md:min-h-[397px]  bg-gradient-to-b from-neutrals-neutral-9 to-white rounded-[24px] pt-2"
    >
      <div className="mx-auto bg-neutrals-neutral-8 w-[100px] h-[5px] rounded-[16px]">
        <motion.div
          className="mt-8 h-full w-[50%] bg-primary-5 rounded-[16px]"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
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
        className="flex flex-col gap-4 p-4 mx-4 rounded-[24px] bg-white shadow-[0px_4px_8px_0px_#00000014]"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <>
          {watch("personType") &&
            watch("personType")?.value === "LEGAL_PERSON" && (
              <>
                <span className="text-secondary-5 text-md">
                  Company Information
                </span>
                <div className="flex md:flex-row flex-col gap-4">
                  <Controller
                    control={control}
                    name="business_name"
                    render={({ field }) => (
                      <div className="flex-1">
                        <TextField
                          {...field}
                          label="Business Name"
                          type="text"
                        />
                      </div>
                    )}
                  />

                  <Controller
                    control={control}
                    name="company_tax_id"
                    render={({ field }) => (
                      <div className="flex-1">
                        <TextField {...field} label="Tax ID" type="text" />
                      </div>
                    )}
                  />
                </div>
                <span className="text-secondary-5 text-md">
                  Personal Information
                </span>
              </>
            )}

          <div className="flex md:flex-row flex-col gap-4">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <div className="flex-1">
                  <TextField {...field} label="Full Name" type="text" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <div className="flex-1">
                  <TextField {...field} label="Phone" type="text" />
                </div>
              )}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <Controller
              control={control}
              name="tax_id"
              render={({ field }) => (
                <div className="flex-1">
                  <TextField {...field} label="ID Number" type="text" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <div className="flex-1">
                  <TextField {...field} label="Email" type="email" />
                </div>
              )}
            />
          </div>
        </>

        <div className="w-[130px] ml-auto mt-6">
          <Button size="large" onClick={onSubmit}>
            Next
          </Button>
        </div>
      </motion.div>
    </form>
  );
}
