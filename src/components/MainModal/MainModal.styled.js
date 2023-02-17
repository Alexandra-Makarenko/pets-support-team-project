import styled from '@emotion/styled';
import { IoCloseSharp } from 'react-icons/io5';
import { device } from 'styles/device';

export const Overlay = styled.div`
  position: fixed;
  top: 0;

  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1200;

  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 70px;

  background-color: #ffffff;
  border-radius: 20px;
  z-index: 1201;

  @media ${device.tablet} {
    top: 70px;
    border-radius: 40px;
  }

  @media ${device.desktop} {
  }
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  top: 20px;
  right: 20px;
  padding: 0;
  background-color: #fdf7f2;
  color: #000000;
  transition: transform 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    border: 2px solid #f59256;
    color: #f59256;
  }

  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const ImgClose = styled(IoCloseSharp)`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
