import React from 'react';
import Input from './Input';
import Button from './Button';
const Form = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <div className="input-container">
        <Input name="email" type="email" label="Email Address" />
        <Input name="password" type="password" label="Password" />
      </div>
      <div className="button-container">
        <Button>Login</Button>
      </div>
      <div className="link-container">
        <a href="">Forgot Password?</a>
      </div>
    </form>
  );
};

export default Form;
