import { useState, useEffect } from 'react';
// import Searchbar from './components/Searchbar';
import { SearchForm } from 'components/Search/SearchForm';
import NewsFeed from './components/NewsFeed';
import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { fetchNews } from './components/helpers/fetchNews';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getNews(search);
  }, [search]);

  const getNews = async searchQueue => {
    const result = await fetchNews(searchQueue);
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
      <PagesTitle>News</PagesTitle>
      <SearchForm />
      {/* <Searchbar
        onSubmit={handleSubmit}
        onChange={updateQueryString}
        value={search}
      /> */}

      <NewsFeed news={news} />
    </section>
  );
};
export default NewsPage;
