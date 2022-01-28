import { Card } from 'antd';
import { EditOutlined, ReadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './card.css';
import logoImg from '../../assets/imgs/logo512.png';

const { Meta } = Card;

const CardContainer = ({
  imgUrl = logoImg,
  title = 'You Have No Title!',
  description = 'Please input a description!'
}) => {
  const stringMaxLength = 120;
  const subDescription = description.length > stringMaxLength
    ? description.slice(0, stringMaxLength) + '...'
    : description;

  return (
    <Card
      hoverable
      cover={<img alt="example" src={imgUrl} />}
      actions={[
        <Link to="/article">
          <ReadOutlined key="read" />,
        </Link>,
        <Link to="/edit">
          <EditOutlined key="edit" />,
        </Link>
      ]}
    >
      <Meta title={title} description={subDescription} />
    </Card>
  );
};
export default CardContainer;