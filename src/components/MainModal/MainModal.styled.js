import styled from '@emotion/styled';
import { IoCloseSharp } from 'react-icons/io5';
import { device } from 'styles/device';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1200;
  overflow: scroll;
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 70px;
  background-color: #ffffff;
  border-radius: 20px;
  z-index: 1201;

  @media ${device.tablet} {
    top: 90px;
    border-radius: 40px;
  }

  @media ${device.desktop} {
    /* top: 329px; */
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
  cursor: pointer;

  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const ImgClose = styled(IoCloseSharp)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
