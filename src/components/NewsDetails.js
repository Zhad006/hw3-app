import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`https://example.com/api/news/${id}`)
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
    </div>
  );
}

export default NewsDetails;