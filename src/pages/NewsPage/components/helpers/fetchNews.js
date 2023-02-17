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

  const sortNewsByDate = news => {
    const sortedNews = news.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return sortedNews;
  };

  if (searchQuery === '') {
    return sortNewsByDate(news);
  } else {
    return sortNewsByDate(news).filter(
      article => article.title.toLowerCase().indexOf(searchQuery) >= 0
    );
  }
};
