import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';

import { Container, CardContainer, SearchContainer } from "../../components";
import "./card-list.css";

const initialCardData = Array.from({ length: 10 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `title${i + 1}`,
  description: `description${i + 1}`
}));

const CardList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cardData, setCardData] = useState(initialCardData);

  const handleSearch = value => {
    setSearchValue(value);
  };

  const handleInput = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setCardData(initialCardData.filter(({ title }) => title.includes(searchValue)));
  }, [searchValue]);

  return (
    <Container>
      <SearchContainer
        handleInput={handleInput}
        handleSearch={handleSearch}
        value={searchValue}
        style={{
          display: 'block',
          width: '600px',
          margin: '40px auto'
        }}
      />
      <Row gutter={[16, 16]} style={{ marginBottom: '40px' }}>
        {
          cardData && cardData.map(({ id, title, description }) => (
            <Col span={8} key={id}>
              <CardContainer
                title={title}
                description={description}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default CardList;