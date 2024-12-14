import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useFormData from "@/hooks/useFormData";
import CheckIcon from "@/assets/icons/CheckIcon";
import { useTheme } from "@/hooks/useTheme";
import { useLocation } from "@modern-js/runtime/router";

export const headerLinks = [
  { label: "Personal Data", path: "/renter/personal-data" },
  { label: "Vehicle", path: "/renter/vehicle" },
  {
    label: "Conditions",
    path: "/renter/conditions",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const currentIndex = headerLinks.findIndex(
    link => link.path === location.pathname,
  );

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isSuccessPage = location.pathname === "renter/success";

  return (
    <>
      <motion.div className="mb-6 mt-4 py-8" layoutId="header">
        <motion.div className="flex flex-wrap gap-4 md:gap-6">
          {headerLinks.map((link, index) => {
            const isDisabled = isSuccessPage;
            const isFinished = index < currentIndex;
            const isCurrent = currentIndex === index;

            return (
              <motion.div
                key={`item-${link.label}`}
                className={`flex items-center p-2.5 flex-1 h-14 ${
                  isCurrent || isFinished
                    ? "shadow-[0px_8px_18px_0px_#00000014] text-primary-5"
                    : "border border-neutrals-neutral-8 text-neutrals-neutral-6"
                } rounded-[14px] ${
                  isDisabled ? "opacity-50 cursor-not-allowed" : ""
                } ${isCurrent ? "" : "hidden md:flex"}`}
                onClick={() => !isDisabled && handleNavigation(link.path)}
                onKeyUp={e =>
                  !isDisabled &&
                  e.key === "Enter" &&
                  handleNavigation(link.path)
                }
                onKeyDown={e =>
                  !isDisabled &&
                  e.key === "Enter" &&
                  handleNavigation(link.path)
                }
                role="button"
                tabIndex={isDisabled ? -1 : 0}
                whileHover={!isDisabled ? { scale: 1.05 } : {}}
                whileTap={!isDisabled ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`rounded-md px-3 h-9 w-9 mr-2 flex items-center justify-center ${isFinished || isCurrent ? "bg-primary-10" : "bg-neutrals-neutral-9"}`}
                  whileHover={
                    !isDisabled ? { scale: 1.1, color: "#0065ff" } : {}
                  }
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isSuccessPage || isFinished ? (
                    <div className="flex items-center justify-center h-full w-10 ">
                      <CheckIcon
                        size={18}
                        color={theme.colors.primary[7]}
                        strokeWidth={2}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full w-1">
                      <span
                        className={`${
                          isCurrent
                            ? "text-primary-5"
                            : isFinished
                              ? "text-primary-8"
                              : "text-neutrals-neutral-6"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </div>
                  )}
                </motion.div>
                <span
                  className={`${
                    isCurrent
                      ? "text-primary-5"
                      : isFinished
                        ? "text-primary-8"
                        : "text-neutrals-neutral-6"
                  }`}
                >
                  {link.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
