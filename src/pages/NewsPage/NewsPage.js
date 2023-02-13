import { useState, useEffect } from 'react';
import { SearchForm } from 'components/Search/SearchForm';
import NewsFeed from './components/NewsFeed';
import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { fetchNews } from './components/helpers/fetchNews';
import { Section } from './NewsPage.styled';
const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    getNews(searchValue);
  }, [searchValue]);

  const getNews = async searchValue => {
    const result = await fetchNews(searchValue);
    setNews(result);
    setStatus('resolved');
  };

  return (
    <Section>
      <PagesTitle>News</PagesTitle>
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        mbtn={{ mobile: 40, rest: 60 }}
      />
      <NewsFeed news={news} status={status} />
    </Section>
  );
};
export default NewsPage;
