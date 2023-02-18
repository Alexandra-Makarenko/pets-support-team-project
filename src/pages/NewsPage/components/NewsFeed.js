import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Loader } from 'components/Loader/Loader';
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
import { articleSplit, titleSplit } from './helpers/articleSplit';
import NewsLoaderBig from 'components/Skeleton/SkeletonNewsLoaderBig';
import { SkeletonNewsLoader } from 'components/Skeleton/SkeletonOptions';
import NewsLoaderSmall from 'components/Skeleton/SkeletonNewsLoaderSmall';

export default function NewsList({ news, status, searchValue }) {
  const logify = () => {
    return toast.warn('Something went wrong. Try again later.', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <NewsContainer>
      {status === 'loading' &&
        window.matchMedia('(min-width: 768px)').matches && (
          <SkeletonNewsLoader>{<NewsLoaderBig />}</SkeletonNewsLoader>
        )}
      {status === 'loading' &&
        window.matchMedia('(max-width: 767px)').matches && (
          <SkeletonNewsLoader>{<NewsLoaderSmall />}</SkeletonNewsLoader>
        )}
      {status === 'resolved' && !news && logify}
      {status === 'resolved' && news && news.length === 0 && (
        <SearchNotFound searchValue={searchValue} />
      )}
      {news && (
        <News>
          {news.map(article => (
            <NewsItem key={nanoid()}>
              <GradientBar></GradientBar>
              <NewsTitle>{titleSplit(article.title)}</NewsTitle>
              <NewsArticle>{articleSplit(article.description)}</NewsArticle>
              <NewsAdditional>
                <NewsDate>{article.date}</NewsDate>
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
