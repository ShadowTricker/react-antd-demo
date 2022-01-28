import { Form, Input, Button, Row, Col } from "antd";
import { Container } from "../../components";
import "./article-edit.css";

const { TextArea } = Input;

const autoSize = {
  minRows: 16,
  maxRows: 16,
};

const ArticleEdit = ({ id, title, content }) => {
  const handleFinish = (v) => {
    console.log(v);
  };

  return (
    <Container
      style={{
        margin: "60px auto",
      }}
    >
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        size="large"
        colon={false}
        onFinish={handleFinish}
      >
        <Form.Item label="Article Title" name="article-title">
          <Input placeholder="Please input your article title!" />
        </Form.Item>
        <Form.Item label="Article Content" name="article-content">
          <TextArea
            autoSize={autoSize}
            placeholder="Please input your article content!"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Row gutter={16}>
            <Col>
              <Button type="primary" htmlType="submit">
                SUBMIT
              </Button>
            </Col>
            <Col>
              <Button htmlType="button">CANCEL</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Container>
  );
};
export default ArticleEdit;
