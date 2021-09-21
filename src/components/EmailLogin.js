import React, { useState } from "react";
import "./EmailLogin.css";
import { Form, Input, Button, Checkbox, Tabs, Divider, Tooltip } from "antd";
import "antd/dist/antd.css";
import {
  UserOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import { VscLock } from "react-icons/vsc";

const { TabPane } = Tabs;

const EmailLogin = () => {
  const [check, setCheck] = useState(false);
  const [isremember, setIsRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(false);
  const [messagetype, setMessageType] = useState("container-error");
  const clicked = () => {
    setCheck(!check);
    // console.log(check);
  };
  const remember = () => {
    setIsRemember(!isremember);
    console.log(isremember);
  };
  const textemail = <span>example: example@mail.com</span>;
  const textpass = (
    <span>
      Minimum 8 characters including uppercase, lowercase, symbol and digits.
    </span>
  );
  const buttonWidth = 70;
  const [mode, setMode] = useState("Login");

  const SwitchMode = (key) => {
    setMode(key);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="signup-form">
      <div className="container-auth">
        <Tabs defaultActiveKey="Login" onTabClick={SwitchMode}>
          {/* Tab1 */}
          <TabPane tab="Log In" key="Login">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
            >
              <div className="form-label">Email</div>
              <Tooltip placement="topRight" title={textemail} trigger="click">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid Email",
                    },
                    {
                      required: true,
                      message: "Please input your Email",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
              </Tooltip>
              <div className="form-label">Password</div>
              <Form.Item
                name="password"
                rules={[
                  {
                    // type: "regexp",
                    // pattern: /^.{8,}/,
                    pattern: /^\S{8,}$/,
                    message: "The input is not a valid Password",
                  },
                  {
                    required: true,
                    message: "Please input Password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<VscLock className="site-form-item-icon" />}
                  // type="password"
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox onChange={remember}>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="" >
                  
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
              <div className="form-label">Full Name</div>
              <Form.Item
                name="fullname"
                rules={[
                  {
                    // type: "regexp",
                    // pattern: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
                    pattern: /^([a-zA-Z]{3,})+\s+([a-zA-Z]{3,})+$/,
                    message: "The input is not a valid Full Name",
                  },
                  {
                    required: true,
                    message: "Please input Full Name",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Full Name"
                />
              </Form.Item>
              <div className="form-label">Email</div>
              <Tooltip placement="topRight" title={textemail} trigger="click">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not a valid Email",
                    },
                    {
                      required: true,
                      message: "Please input your Email",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
              </Tooltip>
              <div className="form-label">Password</div>
              <Form.Item
                name="password"
                rules={[
                  {
                    // type: "regexp",
                    // pattern: /^.{8,}/,
                    pattern: /^\S{8,}$/,
                    message: "The input is not a valid Password",
                  },
                  {
                    required: true,
                    message: "Please input Password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<VscLock className="site-form-item-icon" />}
                  // type="password"
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox onChange={clicked}>
                    I've read and agreed to Skillgig's{" "}
                  </Checkbox>
                </Form.Item>

                <a className="terms-and-services">Terms of Services</a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  disabled={!check}
                >
                  Create an account
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default EmailLogin;
