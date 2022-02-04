import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import { useContext, useEffect } from "react";
import { Container } from "../../components";
import "./article-edit.css";

import axiosInstance from "../../utils/axios";
import { UserInfoContext } from "../../App";

const { TextArea } = Input;

const autoSize = {
  minRows: 16,
  maxRows: 16,
};

const ArticleEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { username } = useContext(UserInfoContext);
  const formInitialValue = {
    articleTitle: '',
    articleContent: ''
  };

  useEffect(() => {
    if (!id && id !== 0) {
      return;
    }
    const getArticle = async id => {
      const { data: { article } } = await axiosInstance.get(`/articles/${id}`);
      const { title: articleTitle, content } = article;
      const contentString = content.join('\n');
      form.setFieldsValue({ articleTitle, articleContent: contentString });
    };
    getArticle(id);
  }, [id, form]);

  const handleFinish = ({
    articleTitle,
    articleContent
  }) => {
    const list = (articleContent && articleContent.split('\n')) ||[];
    const updateArticle = async id => {
      const { data: { status } } = await axiosInstance.put(
        `/articles/${ id }`,
        {
          title: articleTitle,
          content: list,
          author: username
        }
      );
      if (status === 'SUCCESS') {
        navigate('/articles');
      }
    };
    const addArticle = async () => {
      const { data: { status } } = await axiosInstance.post(`/articles`, {
        title: articleTitle,
        content: list,
        author: username
      });
      if (status === 'SUCCESS') {
        navigate('/articles');
      }
    };
    if (id) {
      updateArticle(id);
      return;
    }
    addArticle();
  };

  const handleCancel = () => {
    navigate('/articles');
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
        form={form}
        initialValues={formInitialValue}
        onFinish={handleFinish}
      >
        <Form.Item label="Article Title" name="articleTitle">
          <Input
            placeholder="Please input your article title!"
          />
        </Form.Item>
        <Form.Item label="Article Content" name="articleContent">
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
              <Button htmlType="button" onClick={handleCancel}>CANCEL</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Container>
  );
};
export default ArticleEdit;
