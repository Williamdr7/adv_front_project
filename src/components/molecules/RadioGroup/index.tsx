import { Radio } from "antd";
import type React from "react";

interface RadioGroupProps {
  options: { id: string; value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex gap-4 ">
      {options.map(option => (
        <div
          key={option.id}
          onClick={() => onChange(option.value)}
          onKeyUp={e => e.key === "Enter" && onChange(option.value)}
          role="button"
          tabIndex={0}
          className={`flex flex-1 items-center ${selectedValue === option.value ? "border border-primary-5 bg-secondary-10" : "border border-neutrals-neutral-7"} rounded-[10px] px-4 h-[43px] cursor-pointer`}
        >
          <Radio
            id={option.id}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          >
            {option.label}
          </Radio>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
