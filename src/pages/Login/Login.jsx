// src/components/Login.js
import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from '../../assets/images/logo.png'
import "./Login.scss";

const { Title } = Typography;

export const Login = () => {
  const onFinish = (values) => {
    // Implement your login logic here
    console.log("Received values:", values);
  };
  

  return (
    <>
      <div className="background-container" />
      <div className="login-container">
        <Card className="card-container">
          <div>
            <img src={logo} style={{height:"200px",width:"200px"}} /> 
          </div>
          <Title level={3} className="form-title">
            Login
          </Title>
          <Form
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="mobileno"
              rules={[
                { required: true, message: "Please enter your mobile no!" },
              ]}
            >
              <Input
                count={{
                  show: true,
                  max: 10,
                }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="mobile no"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                style={{ width: "100%", marginTop: 8, background:"#f67c11" }}
              >
                Running Order
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};
