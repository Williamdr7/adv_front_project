import React, { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

type Props = {};

export default function CustomerForm({}: Props) {
  const [secondStep, setSecondStep] = useState(false);
  return (
    <div>
      {!secondStep ? (
        <FirstStep setSecondStep={setSecondStep} />
      ) : (
        <SecondStep goBack={() => setSecondStep(false)} />
      )}
    </div>
  );
}
