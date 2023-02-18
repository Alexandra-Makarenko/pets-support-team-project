import styled from 'styled-components';
import { device } from '../../../styles/device';
import { AiOutlineHeart } from 'react-icons/ai';

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);

  margin-bottom: 32px;
  padding-bottom: ${props => (props.isMyAds ? '12px' : '32px')};
  min-height: 606px;
  color: ${props => props.theme.fontColors.primary};
  background-color: ${props => props.theme.backgrounds.bodySecondary};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  overflow-wrap: break-word;

  @media ${device.tablet} {
    flex-basis: calc(100% / 2 - 32px);
    margin-left: 32px;
  }

  @media ${device.desktop} {
    flex-basis: calc(100% / 4 - 32px);
  }
`;

export const Wrap = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* height: 100%; */
`;
export const ImgWrap = styled.div`
  position: relative;
  height: 288px;
  width: 280px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 336px;
  }
  @media ${device.desktop} {
    width: 288px;
  }
`;

export const CategoryLabel = styled.p`
  font-family: 'Inter500';
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;
  padding: 6px 0;
  width: 158px;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0px 40px 40px 0px;
`;

export const AddToFavoriteBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  top: 12px;
  right: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  width: 44px;
  /* height: 44px; */
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.02);
    border: 2px solid #ffffff;
  }
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: ${props => props.theme.fontColors.buttonSecondary};
  width: 32px;
  height: 28px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* gap: 20px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px; */
`;

export const Title = styled.h2`
  font-family: 'Manrope700';
  font-size: 28px;
  line-height: calc(38 / 28);
  margin-left: 20px;
  margin-right: 30px;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: hidden;

  @media ${device.tablet} {
    margin-right: 85px;
  }
  @media ${device.tablet} {
    margin-right: 36px;
  }
`;

export const Ul = styled.ul`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 8px; */
  font-size: 16px;
  font-family: 'Manrope500';
  line-height: calc(22 / 16);
  @media ${device.tablet} {
    margin-left: 20px;
  }
`;
export const Li = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Lable = styled.p`
  width: 90px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  @media ${device.tablet} {
  }
`;
export const ThumbBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 12px;
  padding-left: 16px;
  padding-right: 16px;
  @media ${device.tablet} {
    padding-left: 44px;
    padding-right: 44px;
  }
`;

export const LearnMoreBtn = styled.button`
  font-family: 'Manrope500';
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #f59256;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  transition: transform ${p => p.theme.transition.first};
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.03);
    border: 2px solid ${p => p.theme.hoverButtonColor.primary};
    color: ${p => p.theme.hoverButtonColor.primary};
    cursor: pointer;
  }
`;

export const BoxConfirmAlert = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fdf7f2;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  @media ${device.tablet} {
    max-width: 608px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const TitleConfirmAlert = styled.h3`
  font-family: 'Manrope500';
  text-align: center;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #111111;

  @media ${device.tablet} {
  }
`;

export const WrapConfirmAlertBtn = styled.div`
  @media ${device.tablet} {
    display: flex;
    margin-top: 60px;
  }
`;

export const YesBtnConfirmAlert = styled.button`
  font-family: 'Manrope500';
  margin-top: 60px;
  color: #ffffff;
  background-color: #f59256;
  border-radius: 40px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  border: 2px solid #f59256;
  transition: transform 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    border: 2px solid #ff6101;
  }

  @media ${device.tablet} {
    margin-top: 0px;
    width: 180px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const NoBtnConfirmAlert = styled.button`
  font-family: 'Manrope500';
  margin-top: 18px;
  width: 100%;
  color: #111111;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-top: 4.5px;
  padding-bottom: 4.5px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  outline: none;
  transition: transform 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    border: 2px solid #ff6101;
  }
  @media ${device.tablet} {
    width: 180px;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 20px;
    font-size: 18px;
    line-height: 25px;
  }
`;
