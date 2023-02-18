import styled from 'styled-components';
import { device } from '../../../styles/device';
import { BsPlusLg } from 'react-icons/bs';
export const AddNotice = styled.button`
  background-color: transparent;
  @media${device.tablet} {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 80px;
    line-height: 16px;
    height: 45px;
    border-radius: 40px;
  }
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  }
  @media ${device.preTablet} {
    position: fixed;
    right: 20px;
    bottom: 80px;
    z-index: 100;
    display: initial;
    background-color: #f59256;

    padding: 16px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
`;
export const AddNoticeButtonText = styled.p`
  @media${device.tablet} {
    display: inline-block;
    white-space: nowrap;
    font-family: 'Manrope500';
    font-size: 20px;
    line-height: 27px;
    margin-right: 20px;
  }

  @media ${device.preTablet} {
    display: initial;
    color: #ffffff;
    font-size: 12px;
  }
`;
export const BsPlusLgButtonContainer = styled.div`
  @media${device.tablet} {
    background-color: #f59256;
    border-radius: 50%;
    padding: 10px;
  }
`;
export const BsPlusLgButton = styled(BsPlusLg)`
  width: 24px;
  height: 24px;
  color: #ffffff;

  @media ${device.preTablet} {
    width: 32px;
    height: 32px;
  }
`;
