import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { SearchNotFound } from 'components/SearchNotFound/SearchNotFound';
import {
  GradientBar,
  News,
  NewsArticle,
  NewsContainer,
  NewsAdditional,
  NewsDate,
  NewsItem,
  NewsTitle,
  NewsMore,
} from './styles/NewsStyles';
import { articleSplit } from './helpers/articleSplit';

export default function NewsList({ news, status, searchValue }) {
  const logify = () => {
    return toast.warn('Something went wrong. Try again later.', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <NewsContainer>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && !news && logify}
      {status === 'resolved' && news && news.length === 0 && (
        <SearchNotFound searchValue={searchValue} />
      )}
      {news && (
        <News>
          {news.map(article => (
            <NewsItem key={nanoid()}>
              <GradientBar></GradientBar>
              <NewsTitle>{article.title}</NewsTitle>
              <NewsArticle>{articleSplit(article.description)}</NewsArticle>
              <NewsAdditional>
                <NewsDate>{article.date || article.publishedAt}</NewsDate>
                <NewsMore
                  href={article.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Read more
                </NewsMore>
              </NewsAdditional>
            </NewsItem>
          ))}
        </News>
      )}
    </NewsContainer>
  );
}
