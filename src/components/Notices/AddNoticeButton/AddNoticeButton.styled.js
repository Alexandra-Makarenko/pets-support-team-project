import styled from 'styled-components';
import { device } from '../../../styles/device';
import { BsPlusLg } from 'react-icons/bs';
export const AddNotice = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 80px;
  line-height: 16px;
  height: 45px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  width: 25%;
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
  }
`;
export const AddNoticeButtonText = styled.p`
  display: inline-block;
  white-space: nowrap;
  font-family: 'Manrope500';
  font-size: 20 px;
  line-height: 27px;
  margin-right: 20px;

  @media ${device.preTablet} {
    color: #ffffff;
    font-size: 12px;
  }
`;
export const BsPlusLgButtonContainer = styled.div`
  padding: 10px;
  background-color: #f59256;
  border-radius: 50%;
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
