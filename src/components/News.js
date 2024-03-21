import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  return (
    <div>
      <h1>Новости</h1>
      <ul>
        <li><Link to="/news/1">News 1</Link></li>
        <li><Link to="/news/2">News 2</Link></li>
        <li><Link to="/news/3">News 3</Link></li>
      </ul>
    </div>
  );
}

export default News;