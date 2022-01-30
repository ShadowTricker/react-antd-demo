import { Container } from '../../components';
import './404-not-found.css';

const NotFound404 = () => {

  const containerStyle = {
    margin: '60px auto',
  };

  return (
    <Container style={containerStyle}>
      <h1 className="title-404">404 Page Not Found!</h1>
      <p className="text-404">There is no such page! Please check your URL again.</p>
    </Container>
  );
};
export default NotFound404;