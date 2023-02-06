import styled from 'styled-components';

const News = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-right: -30px;
    margin-bottom: -30px;
  }
`;
const NewsContainer = styled.div`
  margin: 20px;
`;
const NewsItem = styled.li`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 2 * 32px) / 2);
    margin-right: 32px;
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 3 * 35px) / 3);
    margin-right: 35px;
  }
`;

const GradientBar = styled.div`
  width: 200px;
  border-radius: 2px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 100%);
  @media (min-width: 768px) {
    width: 280px;
    border-radius: 4px;
    height: 8px;
  }
  @media (min-width: 1280px) {
    width: 340px;
  }
`;
const NewsTitle = styled.h3`
  margin-top: 4px;
  margin-bottom: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
`;
const NewsArticle = styled.p`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;
`;
const NewsAdditional = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const NewsDate = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
`;

const NewsMore = styled.a`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: none;
  color: #f59256;
`;

const Empty = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  size: 36px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #111111;
`;

export {
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
};
