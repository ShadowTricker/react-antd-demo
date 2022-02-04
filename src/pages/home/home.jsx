import { Container } from "../../components";
import { Row, Card, Col } from "antd";
import "./home.css";
import logoImg from '../../assets/imgs/logo512.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";

const { Meta } = Card;

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getHomeList = async () => {
      const { data: { status, articles } } = await axiosInstance.get('/articles');
      if (status === 'SUCCESS') {
        setArticles(articles);
      }
    };

    getHomeList();
  }, []);

  return (
    <Container>
      <section className="page-introduction">
        <h1>Write Your Stories Here!</h1>
        <p>Do you have stories?</p>
        <p>Do you have dreams?</p>
        <p>And, do you have pities in your life?</p>
        <p>Then, write them down here.</p>
        <p>Share them with others.</p>
        <p>And maybe, someday...</p>
        <p>You will meet them again...</p>
        <p>And, you may find answers from others' stories...</p>
        <p>And, the most important thing is...</p>
        <h3>Let it go...</h3>
      </section>
      <section className="stories-list">
        <h1>Read Stories</h1>
        <Row gutter={16} style={{ width: '700px', margin: '0 auto' }}>
          {
            articles && articles.length && articles.map(({ id, title, description }) => (
              <Col span={12} key={id}>
                <Link to={`/article/${id}`}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={logoImg} />}
                  >
                    <Meta title={title} description={description} />
                  </Card>
                </Link>
              </Col>
            ))
          }
        </Row>
      </section>
    </Container>
  );
}
