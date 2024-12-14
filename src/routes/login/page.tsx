import React from "react";
import { Form, Input, Button, message } from "antd";
import { motion } from "framer-motion";
import { Link, useNavigate } from "@modern-js/runtime/router";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    localStorage.setItem("token", "1234567890");
    message.success("Login successful!");
    navigate("/");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl font-semibold mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Login
      </motion.h1>
      <Form
        name="login"
        onFinish={onFinish}
        layout="vertical"
        className="w-full max-w-md"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input className="h-10" placeholder="Your Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          className="h-16"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="h-10" placeholder="Your Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Login
          </Button>
        </Form.Item>
      </Form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register here
        </Link>
      </p>
    </motion.div>
  );
};

export default LoginPage;
