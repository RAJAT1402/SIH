import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import './index.css';
import Posts from './Posts';
import PostCards from './PostCards';
import Form from './Form';
ReactDOM.render(
  <div>
    <Header />
    {/* <PostCards />
    <PostCards />
    <App /> */}
    <Form />
  </div>,
  document.getElementById('root')
);
