import React, { useState } from "react";
import { Modal, Upload, Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "@modern-js/runtime/router";
import useFormData from "@/hooks/useFormData";

type VehicleData = {
  year: string;
  make: string;
  model: string;
  image: File | null;
  price: string;
  mileage: string;
  doors: number;
};

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function VehicleForm({ visible, onClose }: Props) {
  const { formData, updateFormData } = useFormData();
  const [vehicleData, setVehicleData] = useState<VehicleData>({
    year: "",
    make: "",
    model: "",
    image: null,
    price: "",
    mileage: "",
    doors: 4,
  });
  const navigate = useNavigate();

  const handleImageChange = (info: any) => {
    if (info.file.status === "done") {
      setVehicleData(prevData => ({
        ...prevData,
        image: info.file.originFileObj,
      }));
    }
  };

  const handleInputChange =
    (field: keyof VehicleData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setVehicleData(prevData => ({
        ...prevData,
        [field]: e.target.value,
      }));
    };

  const handleNext = () => {
    updateFormData({
      ...formData,
      vehicleData,
    });
    navigate("/renter/conditions");
  };

  return (
    <Modal
      title="Vehicle Form"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="modal-container"
    >
      <div className="p-4">
        <div
          className="w-full h-40 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer"
          onClick={() => document.getElementById("imageUpload")?.click()}
        >
          {vehicleData.image ? (
            <img
              src={URL.createObjectURL(vehicleData.image)}
              alt="Selected Vehicle"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <span className="text-gray-500">Click to upload an image</span>
          )}
        </div>
        <Upload
          id="imageUpload"
          onChange={handleImageChange}
          showUploadList={false}
          accept="image/*"
          style={{ display: "none" }}
        >
          <Button icon={<UploadOutlined />} style={{ display: "none" }}>
            Upload
          </Button>
        </Upload>
        <Input
          placeholder="Year"
          value={vehicleData.year}
          onChange={handleInputChange("year")}
          className="my-4"
        />
        <Input
          placeholder="Make"
          value={vehicleData.make}
          onChange={handleInputChange("make")}
          className="mb-4"
        />
        <Input
          placeholder="Model"
          value={vehicleData.model}
          onChange={handleInputChange("model")}
          className="mb-4"
        />
        <Input
          placeholder="Desired Price per Month"
          value={vehicleData.price}
          onChange={handleInputChange("price")}
          className="mb-4"
        />
        <Input
          placeholder="Mileage"
          value={vehicleData.mileage}
          onChange={handleInputChange("mileage")}
          className="mb-4"
        />
        <Input
          placeholder="Number of Doors"
          value={vehicleData.doors}
          onChange={handleInputChange("doors")}
          className="mb-4"
          type="number"
        />
        <Button
          type="primary"
          className="mt-4"
          onClick={handleNext}
          disabled={
            !vehicleData.image ||
            !vehicleData.year ||
            !vehicleData.make ||
            !vehicleData.model ||
            !vehicleData.price ||
            !vehicleData.mileage
          }
        >
          Next
        </Button>
      </div>
    </Modal>
  );
}
