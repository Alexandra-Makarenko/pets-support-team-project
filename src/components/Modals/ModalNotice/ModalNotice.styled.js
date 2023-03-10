import styled from 'styled-components';
import { device } from 'styles/device';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ModalNoticeBox = styled.div`
  max-width: 280px;
  padding-top: 60px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;

  @media ${device.tablet} {
    min-width: 704px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondWrap = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;

  @media ${device.tablet} {
    width: 288px;
    height: 328px;
  }
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
  height: 100%;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
`;

export const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 16px;

  @media ${device.tablet} {
    margin-left: 20px;
    padding-top: 0;
    width: 320px;
  }
`;

export const Title = styled.h2`
  word-wrap: break-word;
  font-family: 'Manrope700';
  padding-right: 35px;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  gap: 8px;
  line-height: calc(22 / 16);
`;

export const Li = styled.li`
  display: flex;
  font-family: 'Manrope500';
  font-size: 14px;
  line-height: 19px;
  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Lable = styled.p`
  font-family: 'Manrope600';
  font-size: 14px;
  line-height: 19px;
  width: 94px;
  flex-shrink: 0;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Text = styled.p`
  font-family: 'Manrope500';
  font-size: 14px;
  line-height: 19px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const OwnerLink = styled(Link)`
  transition: color 100ms cubic-bezier(0.57, 0.21, 0.69, 1.25);
  color: ${props => props.theme.fontColors.buttonPrimary};
  font-family: 'Manrope500';
  font-size: 14px;
  line-height: 19px;
  &:hover {
    color: ${props => props.theme.fontColors.buttonSecondary};
  }
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TextLink = styled.a`
  width: 122px;
  word-wrap: break-word;
  text-decoration: none;
  font-size: 14px;
  line-height: 19px;

  color: #000000;
  &:hover {
    color: #f59256;
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    width: 235px;
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
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 19px;

  @media ${device.tablet} {
    font-family: 'Manrope500';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }
`;

export const CommentsLable = styled.span`
  font-family: 'Manrope600';
  /* font-weight: bold; */
`;

export const WrapForBtn = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    margin-top: 32px;
    padding-right: 40px;
  }
`;

export const ContactModalNoticeBtn = styled.a`
  font-family: 'Manrope500';
  display: block;
  margin-top: 40px;
  width: 100%;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  background-color: #f59256;
  border-radius: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border: 2px solid #f59256;
  transition: transform ${p => p.theme.transition.first};

  &:hover,
  &:focus {
    transform: scale(1.03);
    border: 2px solid ${p => p.theme.hoverButtonColor.primary};
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin-top: 0px;
    margin-left: 12px;
    width: 160px;
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
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  transition: transform ${p => p.theme.transition.first};

  &:hover,
  &:focus {
    transform: scale(1.03);
    border: 2px solid ${p => p.theme.hoverButtonColor.primary};
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin-top: 0px;

    width: 160px;
  }
`;

export const RemoveFavoriteBtn = styled.button`
  font-family: 'Manrope500';
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  color: #111111;
  background-color: #ffffff;
  border: 2px solid #ff6101;
  border-radius: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  transition: transform ${p => p.theme.transition.first};

  &:hover,
  &:focus {
    transform: scale(1.03);
    border: 2px solid ${p => p.theme.hoverButtonColor.primary};
    cursor: pointer;
  }

  @media ${device.tablet} {
    margin-top: 0px;

    width: 160px;
  }
`;
export const HeartIcon = styled(AiFillHeart)`
  margin-left: 8px;
  color: #f59256;
  width: 16px;
  height: 16px;
`;
