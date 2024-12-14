import React, { useState } from "react";
import { Modal, InputNumber, Button, message } from "antd";
import useFormData from "@/hooks/useFormData";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function ProposalModal({ visible, onClose }: Props) {
  const { formData } = useFormData();
  const [days, setDays] = useState<number>(1);
  const [amount, setAmount] = useState<number>(formData?.price?.min_price || 0);

  const handleSubmit = () => {
    message.success(`Proposed amount sent to ${formData?.vehicle?.name}`);
    onClose();
  };

  return (
    <Modal
      title="Proposal for the Vehicle"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div className="flex flex-col items-center">
        <img
          src={formData?.vehicle?.image}
          alt="Vehicle"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-lg font-semibold">{formData?.vehicle?.name}</h2>
        <p className="text-gray-500">
          Suggested amount per month: $ {formData?.vehicle?.price?.min_price}
        </p>

        <div className="mt-4 flex gap-4">
          <div>
            <label className="flex-1">Period (days):</label>
            <InputNumber
              min={1}
              value={days}
              onChange={value => setDays(value || 1)}
              className="w-full mb-4"
            />
          </div>

          <div>
            <label className="flex-1">Proposal Amount:</label>
            <InputNumber
              prefix="$"
              min={0}
              value={amount}
              onChange={value => setAmount(value || 0)}
              className="w-full mb-4"
            />
          </div>
        </div>

        <Button type="primary" className="w-full mt-4" onClick={handleSubmit}>
          Submit Proposal
        </Button>
      </div>
    </Modal>
  );
}
