const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/api/news', (req, res) => {
 
  const news = [
    { id: 1, title: 'News 1', content: 'Content of news 1' },
    { id: 2, title: 'News 2', content: 'Content of news 2' },
    { id: 3, title: 'News 3', content: 'Content of news 3' }
  ];
  res.json(news);
});


app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});