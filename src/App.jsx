import { Button } from 'antd';
import './App.css';

import { Header, Footer } from './components';

function App() {
  const handleClick = () => {
    console.log('Click!');
  }

  return (
    <>
      <Header />
      <main>
        <Button type="primary" onClick={handleClick}>Click</Button>
      </main>
      <Footer />
    </>
  );
}

export default App;
