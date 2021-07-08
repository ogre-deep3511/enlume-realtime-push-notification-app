import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

const Register = () => {

  const [isAuth, setIsAuth] = useState(true);

  if(!isAuth) {
    return <Router><Route render={() => <Redirect to='/login' />} /></Router>
  }

  return (
    <>
        <Form>
          <Form.Item label="Welcome to Enlume" name="layout">
          </Form.Item>
          <Form.Item label="NAME">
            <Input placeholder="Your name" />
          </Form.Item>
          <Form.Item label="EMAIL">
            <Input placeholder="Your email" />
          </Form.Item>
          <Form.Item label="PHONE">
            <Input placeholder="Your phone number" />
          </Form.Item>
          <Form.Item label="PASSWORD">
            <Input placeholder="Your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => setIsAuth(false)}>Register</Button>
          </Form.Item>
        </Form>
    </>
  );
};

export default Register