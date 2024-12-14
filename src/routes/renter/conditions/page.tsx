import React from "react";
import ConditionsForm from "@/components/molecules/ConditionsForm";
import Header from "@/components/molecules/Header";

export default function Conditions() {
  return (
    <div>
      <Header />
      <div className="flex w-full justify-between items-start md:flex-row flex-col gap-4 p-4 bg-gradient-to-b from-neutrals-neutral-9 to-white rounded-[24px]">
        <div className="w-full h-full ">
          <ConditionsForm />
        </div>
      </div>
    </div>
  );
}
