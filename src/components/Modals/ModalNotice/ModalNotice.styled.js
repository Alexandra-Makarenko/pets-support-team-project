import styled from '@emotion/styled';
import { device } from 'styles/device';
import { AiFillHeart } from 'react-icons/ai';

export const ModalNoticeBox = styled.div`
  max-width: 240px;
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
  max-width: 100%;
  height: auto;
  border-radius: 0px 0px 40px 40px;
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
  border-radius: 0px 40px 40px 0px;
`;

export const Img = styled.img`
  width: 100%;
  /* height: 288px; */
  object-fit: contain;
`;

export const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 16px;
`;

export const Title = styled.h2`
  font-family: 'Manrope700';
  /* font-weight: 700; */
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
  /* height: 76px; */
  /* overflow: hidden; */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  gap: 8px;
  font-size: 16px;
  line-height: calc(22 / 16);
`;
export const Li = styled.li`
  display: flex;
  font-family: 'Manrope500';
  font-size: 14px;
  line-height: 19px;
`;
export const Lable = styled.p`
  font-family: 'Manrope600';
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

export const CommentsParagraph = styled.p`
  margin-top: 28px;
  /* font-family: 'Manrope500'; */
  font-size: 14px;
  line-height: 19px;
`;

export const CommentsLable = styled.span`
  font-family: 'Manrope600';
  /* font-weight: bold; */
`;

export const ContactModalNoticeBtn = styled.button`
  font-family: 'Manrope500';
  margin-top: 40px;
  width: 100%;
  color: #ffffff;
  background-color: #f59256;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  /* &:hover {
    transform: scale(1.03);
  } */

  @media ${device.tablet} {
    margin-top: 40px;
  }

  @media ${device.desktop} {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
`;

export const AddModalNoticeBtn = styled.button`
  font-family: 'Manrope500';
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  color: #111111;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }

  @media ${device.tablet} {
    margin-top: 16px;
  }

  @media ${device.desktop} {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
  }
`;

export const HeartIcon = styled(AiFillHeart)`
  margin-left: 8px;
  color: #f59256;
  width: 16px;
  height: 16px;

  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
`;
