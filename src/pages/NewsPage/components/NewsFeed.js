import { nanoid } from 'nanoid';
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

export default function NewsList({ news }) {
  return (
    <NewsContainer>
      {!news && (
        <Empty>
          Новини не знайдено. Змініть параметри пошуку або спробуйте пізніше.
        </Empty>
      )}
      {news && (
        <News>
          {news.map(article => (
            <NewsItem key={nanoid()}>
              <GradientBar></GradientBar>
              <NewsTitle>{article.title}</NewsTitle>
              <NewsArticle>{article.description}</NewsArticle>
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
