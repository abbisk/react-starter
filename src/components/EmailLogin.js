import React, { useState } from "react";
import "./EmailLogin.css";
import { Form, Input, Button, Checkbox, Tabs,Divider } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { VscLock } from "react-icons/vsc";

const { TabPane } = Tabs;

const EmailLogin = () => {
  const [mode, setMode] = useState("Login");

  const SwitchMode = (key) => {
    setMode(key)
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      {/* <h5 className="h5">Or {mode} with email</h5> */}
      <Divider>Or {mode} with email</Divider>
      <div className="container-auth">
        <Tabs defaultActiveKey="Login" onTabClick={SwitchMode}>
          {/* Tab1 */}
          <TabPane tab="Log In" key="Login" >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<VscLock className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          {/* Tab2 */}
          <TabPane tab="Create an account" key="Signup">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Full Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<VscLock className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>I've read and agreed to Skillgig's </Checkbox>
                </Form.Item>

                <a className="terms-and-services" href="">
                  Terms of Services
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Create an account
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default EmailLogin;