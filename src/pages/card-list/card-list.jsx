import { Col, Row, Button, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container, CardContainer, SearchContainer } from "../../components";
import axiosInstance from '../../utils/axios';
import "./card-list.css";
import { EditOutlined, ReadOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const CardList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cardData, setCardData] = useState([]);
  const [needRefresh, setNeedRefresh] = useState(false);
  const navigate = useNavigate();

  const handleSearch = value => {
    setSearchValue(value);
  };

  const navigateTo = (path, id) => {
    navigate(`/${ path }/${ id }`);
  };

  const deleteArticle = async id => {
    const { data: { status } } = await axiosInstance.delete(`/articles/${id}`);
    if (status === 'SUCCESS') {
      setNeedRefresh(true);
    }
  };

  const showDeleteModal = id => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure to delete this article?',
      okText: 'Okay',
      cancelText: 'Cancel',
      onOk: () => deleteArticle(id)
    });
  };

  const genCardAction = id => {
    return [
      <ReadOutlined key="read"
        onClick={() => navigateTo('article', id)}
      />,
      <EditOutlined key="edit"
        onClick={() => navigateTo('edit', id)}
      />,
      <DeleteOutlined key="delete"
        onClick={() => showDeleteModal(id)}
      />,
    ];
  };

  useEffect(() => {
    const getArticles = async () => {
      const { data: { articles } } = await axiosInstance.get('/articles');
      setNeedRefresh(false);
      setCardData(articles.filter(({ title }) => title.includes(searchValue)));
    };
    getArticles();
  }, [searchValue, needRefresh]);

  return (
    <Container>
      <section className="article-func">
        <SearchContainer
          handleSearch={handleSearch}
        />
        <Button type="primary" size="large"
          style={{ marginLeft: '20px' }}
        >
          <Link to="/edit">Add Article</Link>
        </Button>
      </section>
      <Row gutter={[16, 16]} style={{ marginBottom: '40px' }}>
        {
          cardData && cardData.map(({ id, title, description }) => (
            <Col span={8} key={id}>
              <CardContainer
                id={id}
                title={title}
                description={description}
                actions={genCardAction(id)}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default CardList;