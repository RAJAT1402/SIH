import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import './index.css';
import Posts from './Posts';
import PostCards from './PostCards';

ReactDOM.render(
  <div>
    <Header />
    <PostCards />
    <PostCards />
    <App />
  </div>,
  document.getElementById('root')
);
