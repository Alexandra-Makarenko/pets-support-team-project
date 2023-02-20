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
  margin-bottom: 20px;
`;
const NewsItem = styled.li`
  display: flex;
  flex-direction: column;
  max-height: 100%;
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

const SkeletonItem = styled.li`
  display: flex;
  flex-direction: column;
  max-height: 100%;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 16px;
  font-family: 'Manrope700';
  font-size: 24px;
  size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
`;
const NewsArticle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-family: 'Manrope400';
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
  font-family: 'Manrope400';
  font-size: 16px;
  line-height: 21.86px
  color: rgba(11, 11, 11, 0.6);
`;

const NewsMore = styled.a`
  font-family: 'Manrope500';
  font-size: 16px;
  line-height: 21.86px;
  text-align: right;
  text-decoration: none;
  color: #f59256;
  &:hover {
    text-decoration: underline;
  }
`;

const Empty = styled.h3`
  font-family: 'Manrope700', sans-serif;
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
  SkeletonItem,
  NewsTitle,
  NewsMore,
  Empty,
};
