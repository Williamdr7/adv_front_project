import React from "react";
import { motion } from "framer-motion";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  hasBorderRight: boolean;
  thin?: boolean;
  length?: number;
}

interface CustomTabsProps {
  tabs: {
    label: string;
    value: string;
  }[];
  selectedTab: string;
  onTabChange: (value: string) => void;
  className?: string;
  textClassName?: string;
  thin?: boolean;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  selectedTab,
  onTabChange,
  className,
  thin,
}) => {
  return (
    <motion.div
      className={`w-[100%] flex bg-neutrals-neutral-9 rounded-[14px] p-1 ${className}`}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {tabs.map((tab, index) => {
        const isSelected = selectedTab === tab.value;
        const hasBorderRight =
          !isSelected &&
          index < tabs.length - 1 &&
          selectedTab !== tabs[index + 1]?.value;
        return (
          <div
            key={`tab-${tab.value}`}
            className={`flex items-center justify-center w-full`}
          >
            <Tab
              label={tab.label}
              isActive={isSelected}
              onClick={() => onTabChange(tab.value)}
              hasBorderRight={hasBorderRight}
              thin={thin}
              length={tabs.length}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

const Tab: React.FC<TabProps> = ({
  label,
  isActive,
  onClick,
  hasBorderRight,
  thin,
  length,
}) => (
  <motion.div
    className={`flex items-center justify-center p-2 flex-1 h-full min-h-12 ${isActive ? "shadow-[0px_4px_8px_0px_#00000014] text-primary-5 bg-white z-1" : "text-neutrals-neutral-6"} rounded-[14px] ${hasBorderRight ? "relative" : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {hasBorderRight && (
      <div
        className="absolute right-0 h-[70%] border-r border-neutrals-neutral-7"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      />
    )}
    <p
      className={`font-semibold ${
        isActive ? "text-primary-5" : "text-neutrals-neutral-5"
      } ${
        thin
          ? "text-sm"
          : length && length <= 4
            ? "text-lg"
            : "text-base"
      }`}
    >
      {label}
    </p>
  </motion.div>
);

export default CustomTabs;
