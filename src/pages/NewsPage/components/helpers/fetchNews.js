import axios from 'axios';

export const fetchNews = async searchQuery => {
  const news = await axios
    .get('/api/news', {
      params: {},
    })
    .then(result => {
      return result.data;
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.statusText);
        console.log(error.message);
        console.log(error.response.headers);
        console.log(error.response.data);
      }
    });

  if (!searchQuery) {
    return news;
  } else {
    return news.filter(
      article =>
        article.title.includes(searchQuery) ||
        article.description.includes(searchQuery)
    );
  }
};

