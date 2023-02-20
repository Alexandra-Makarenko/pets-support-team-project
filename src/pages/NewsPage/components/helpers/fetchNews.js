import axios from 'axios';

export const fetchNews = async searchQuery => {
  const params = searchQuery;
  const news = await axios
    .get('/news', {
      params: { keyword: params },
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

  return sortNewsByDate(news);

};
