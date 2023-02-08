import styled from 'styled-components';
// import { theme } from "../../styles/theme.jsx";
import { device } from '../../styles/device';

export const SharedLayoutBox = styled.div`
  background-color: ${props => props.theme.backgrounds.input};
  width: 100%;
  min-height: 100vh; 
`;
export const SharedLayoutContainer = styled.div`
  outline: 1px solid red;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    width: 768px;
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${device.desktop} {
    width: 1280px;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
