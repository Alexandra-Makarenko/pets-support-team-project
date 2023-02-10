import { useState, useEffect } from 'react';
// import Searchbar from './components/Searchbar';
import { SearchForm } from 'components/Search/SearchForm';
import NewsFeed from './components/NewsFeed';
import { PagesTitle } from 'components/PagesTitle/PagesTitle';
import { fetchNews } from './components/helpers/fetchNews';
import { Section } from './NewsPage.styled';
const NewsPage = () => {
  const [news, setNews] = useState([]);
//   const [search, setSearch] = useState('');

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async searchQueue => {
    const result =
      //for now will load from news api but need to change to local host
      // (await fetchNews(searchQueue)) || (await fetchNewsEng(searchQueue));
      await fetchNews(searchQueue);
    //  (await fetchNewsEng(searchQueue));
    setNews(result);
  };

//   const handleSubmit = event => {
//     event.preventDefault();
//     getNews(search);
//   };

//   const updateQueryString = queue => {
//     setSearch(queue);
//   };

  return (
    <Section>
      <PagesTitle>News</PagesTitle>
      <SearchForm />
      {/* <Searchbar
        onSubmit={handleSubmit}
        onChange={updateQueryString}
        value={search}
      /> */}

      <NewsFeed news={news} />
    </Section>
  );
};
export default NewsPage;
