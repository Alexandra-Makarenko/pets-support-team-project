import styled from 'styled-components';
import { device } from '../../../styles/device';
import { AiOutlineHeart } from 'react-icons/ai';

export const Item = styled.li`
  margin-bottom: 32px;
  height: 100%;
  color: #111111;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  overflow-wrap: break-word;

  @media ${device.tablet} {
    flex-basis: calc(100% / 4 - 32px);
    margin-left: 32px;
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
  height: 44px;
  cursor: pointer;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: #f59256;
  /* background-color: #fdf7f2; */
  /* backdrop-filter: blur(2px); */

  /* backdrop-filter: blur(2px); */
  width: 32px;
  height: 28px;
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
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
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
  @media ${device.tablet} {
  }
`;

export const ThumbBtn = styled.div`
  margin-top: ${props => (props.isMyAds ? '50px' : '20px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 12px;
  padding-bottom: ${props => (props.isMyAds ? '12px' : '32px')};
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
  cursor: pointer;
`;

// export const RemoveFavoriteBtn = styled.button`
//   font-family: 'Manrope500';
//   width: 100%;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   color: #ff6101;
//   background: #ffffff;
//   border: 2px solid #ff6101;
//   border-radius: 40px;
//   font-size: 16px;
//   line-height: 22px;
//   letter-spacing: 0.04em;

//   cursor: pointer;
// `;
