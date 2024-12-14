import { queryClient } from "@/routes/layout";
import { useLocation, useNavigate } from "@modern-js/runtime/router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useFormData = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const loadFormData = async () => {
    const savedData = await localStorage.getItem("formData");

    return savedData ? JSON.parse(savedData) : {};
  };

  const { data, isLoading } = useQuery({
    queryKey: ["formData"],
    queryFn: loadFormData,
  });

  const updateFormData = (newData: FormData) => {
    queryClient.setQueryData(["formData"], newData);
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const resetFormData = () => {
    localStorage.removeItem("formData");
    queryClient.setQueryData(["formData"], null);
  };

  const submitFormData = async (updatedFormData: FormData) => {};

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [location.pathname]);

  return {
    formData: data,
    rendering: isLoading,
    updateFormData,
    submitFormData,
    resetFormData,
  };
};

export default useFormData;
