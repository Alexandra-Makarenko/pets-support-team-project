import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';
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
  Empty,
} from './styles/NewsStyles';
import { articleSplit } from './helpers/articleSplit';

export default function NewsList({ news, status }) {
  console.log(status);
  return (
    <NewsContainer>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && !news && (
        <Empty>Щось пішло не так. Спробуйте пізніше</Empty>
      )}
      {status === 'resolved' && news && news.length === 0 && (
        <Empty>Ми не знайшли новин по вашому запиту</Empty>
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
