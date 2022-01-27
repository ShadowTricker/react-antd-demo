import { Button } from 'antd';
import './App.css';

import { Container, Header, Footer } from './components';

function App() {
  const handleClick = () => {
    console.log('Click!');
  }

  return (
    <Container>
      <Header />
      <main>
        <Button type="primary" onClick={handleClick}>Click</Button>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
