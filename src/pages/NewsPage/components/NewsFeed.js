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
import { articleSplit } from './helpers/articleSplit';

export default function NewsList({ news }) {
  console.log(news);
  return (
    <NewsContainer>
      {!news && <Empty>Щось пішло не так. Спробуйте пізніше</Empty>}
      {news.length === 0 && <Empty>Ми не знайшли новин по вашому запиту</Empty>}
      {news && (
        <News>
          {news.map(article => (
            <NewsItem key={nanoid()}>
              <GradientBar></GradientBar>
              <NewsTitle>{article.title}</NewsTitle>
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
