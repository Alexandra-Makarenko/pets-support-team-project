import axios from 'axios';

export const fetchNews = async searchQuery => {
  const news = await axios
    .get('/news', {
      params: {},
    })
    .then(result => {
      return result.data.data;
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.statusText);
      }
    });

  if (!searchQuery) {
    return news;
  } else {
    return news.filter(
      article => article.title.indexOf(searchQuery) > 0
    );
  }
};
