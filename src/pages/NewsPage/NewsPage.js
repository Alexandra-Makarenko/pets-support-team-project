
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import NewsFeed from './components/NewsFeed';
import { fetchNewsEng, fetchNews } from './components/helpers/fetchNews';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    getNews();
  }, []);


  const getNews = async searchQueue => {
    const result =
      (await fetchNews(searchQueue)) || (await fetchNewsEng(searchQueue));
    setNews(result);
  };

  const handleSubmit = event => {
    event.preventDefault();
    getNews(search);
  };

  const updateQueryString = queue => {
    setSearch(queue);
  };

  return (
    <section>

      <Searchbar
        onSubmit={handleSubmit}
        onChange={updateQueryString}
        value={search}
      />

      <NewsFeed news={news} />

    </section>
  );
};
export default NewsPage;
