import styled from '@emotion/styled';
import { device } from 'styles/device';

export const ModalNoticeBox = styled.div`
  max-width: 280px;
  padding-top: 60px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    max-width: 608px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ImgWrap = styled.div`
  position: relative;
`;

export const CategoryLabel = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;
  padding: 6px 0;
  width: 158px;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  /* border-radius: 0px 40px 40px 0px; */
`;

export const Img = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: calc(38 / 28);
  height: 76px;
  overflow: hidden;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
  line-height: calc(22 / 16);
`;
export const Li = styled.li`
  display: flex;
`;
export const Lable = styled.p`
  width: 90px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  @media screen and (min-width: 768px) {
  }
`;
export const ThumbBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  color: #f59256;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
`;
