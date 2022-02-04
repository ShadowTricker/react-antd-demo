import { Card, Form, Input, Button, notification } from "antd";
import { Container } from "../../components";
import axiosInstance from "../../utils/axios";
import "./login.css";
import { UserInfoContext } from "../../App";
import { useContext } from "react";
import { firstCapFunc } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { updateUsername } = useContext(UserInfoContext);
  const navigate = useNavigate();


  const openNotification = type => {
    notification[type]({
      message: `Login ${firstCapFunc(type)}!`
    });
  };

  const handleFinish = v => {
    const loginFunc = async userInfo => {
      const { data: { status } } = await axiosInstance.post('/login', v);
      if (status === 'SUCCESS') {
        updateUsername(v.username);
        navigate(-1, { replace: true });
      }
      openNotification(status.toLowerCase());
    };
    loginFunc(v);
  };

  return (
    <Container>
      <div className="login-card">
        <Card title="LOGIN">
          <Form
            size="large"
            onFinish={handleFinish}
          >
            <Form.Item name="username">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Container>
  );
};
export default Login;
