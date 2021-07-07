import React, {useState} from "react";
import "./EmailLogin.css";
import { Tabs, Input } from "antd";
import "antd/dist/antd.css";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { VscLock } from "react-icons/vsc";

const { TabPane } = Tabs;




const LoginComponent = (props) => (

  <>
    <label htmlFor="usename" className="username">
      Email
    </label>
    {/* <input type="text" name="name" className="user-input" /> */}
    <Input
      placeholder="default size"
      prefix={<MailOutlined />}
      className="user-input"
      placeholder="full name"
      onChange={e => props.setEmail(e.target.value)}
    />

    <label htmlFor="password" className="password">
      Password
    </label>
    {/* <input type="text" name="Submit" className="password-input"/> */}
    <Input
      placeholder="default size"
      prefix={<VscLock />}
      className="password-input"
      placeholder="password"
      onChange={e => props.setlPass(e.target.value)}

    />
    <br />
  </>
  );

const Remindme = () => (
  <>
    <div className="remindme">
      <div>
        <input type="checkbox" name="Submit" className="checkbox" />
        <label htmlFor="check"> Remind Me?</label>
      </div>
      <a href="#" className="lastpass"> Last Password?</a>
    </div>
  </>
);

const EmailLogin = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setlPass] = useState('');
  const [fname, setFname] = useState('');

  const submitValue = (e) => {
    e.preventDefault();
    const frmdetails = {
        'Pass' : pass,
        'Email' : email,
        'Fname' : fname
    }
    console.log(frmdetails);
}

  
  return (
    <>
      <form onSubmit={submitValue}>
        <div className="container-auth">
          <Tabs defaultActiveKey="1" className="tabs">
            <TabPane tab="Log In" key="1" className="container-login">
              <LoginComponent setEmail={setEmail} setlPass={setlPass}/>
              <div className="remindme">
              <div>
                <input type="checkbox" name="Submit" className="checkbox" />
                <label htmlFor="check"> Remind Me?</label>
              </div>
              <a href="#" className="lastpass"> Last Password?</a>
              </div>
            </TabPane>
            <TabPane
              tab="Create an account"
              key="2"
              className="container-login"
            >
              <label htmlFor="usename" >
                Full Name
              </label>
              <Input
                placeholder="default size"
                prefix={<UserOutlined />}
                className="user-input"
                onChange={e => setFname(e.target.value)}
              />
              <br />
              <LoginComponent setEmail={setEmail} setlPass={setlPass}/>
              <div className="remindme">
              <div>
                <input type="checkbox" name="Submit" className="checkbox" />
                <label htmlFor="check"> I've read and agreed to Skillgig's</label>
                <a href="#" className="lastpass"> Terms of Services</a>
              </div>
              </div>
            </TabPane>
          </Tabs>

          {/* <Remindme /> */}

          <input type="submit" value="Login" className="submit-button"/>
        </div>
      </form>
    </>
  );
};

export default EmailLogin;
