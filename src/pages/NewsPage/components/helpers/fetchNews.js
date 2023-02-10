import axios from 'axios';

export const fetchNews = async searchQuery => {

  const news = await axios
    .get('/news', {
      params: {},
    })
    .then(result => {
      console.log(result.data.data)
      return result.data.data;
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

