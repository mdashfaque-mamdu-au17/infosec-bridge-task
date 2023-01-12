import { useState } from 'react';
import Logo from './assets/react-logo.png';
import Header from './components/Header';
import Tabs from './components/Tabs';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Header />
      <Tabs />
    </div>
  );
}

export default App;
