import React from 'react';

const Tabs = () => {
  return (
    <div className="tabs-section">
      <div className="single-tab-container">
        <a href="" className="tab-link active">
          Login
        </a>
        <div className="underline"></div>
      </div>
      <div className="single-tab-container">
        <a href="" className="tab-link">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Tabs;
