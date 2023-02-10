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

export const fetchNewsEng = async searchQuery => {
  axios.defaults.baseURL = 'https://newsapi.org/v2/everything';
  const apiKey = 'cca648924d3d4c1391481ce66654c304';

  const news = await axios
    .get('', {
      params: {
        apiKey: apiKey,
        q: 'nature',
        language: 'en',
        pageSize: 20,
      },
    })
    .then(result => {
      return result.data.articles;
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
