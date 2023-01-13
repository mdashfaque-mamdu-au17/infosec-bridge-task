import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Form from './components/Form';
import SocialLogins from './components/SocialLogins';
function App() {
  return (
    <div className="main-container">
      <Header />
      <Tabs />
      <Form />
      <SocialLogins />
    </div>
  );
}

export default App;
