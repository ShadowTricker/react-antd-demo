import { Card } from 'antd';
import './card.css';
import logoImg from '../../assets/imgs/logo512.png';

const { Meta } = Card;

const CardContainer = ({
  imgUrl = logoImg,
  id,
  title = 'You Have No Title!',
  description = 'Please input a description!',
  actions = []
}) => {
  const stringMaxLength = 120;
  const subDescription = description.length > stringMaxLength
    ? description.slice(0, stringMaxLength) + '...'
    : description;

  return (
    <Card
      hoverable
      cover={<img alt="example" src={imgUrl} />}
      actions={actions}
    >
      <Meta title={title} description={subDescription} />
    </Card>
  );
};
export default CardContainer;