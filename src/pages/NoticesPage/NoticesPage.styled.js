import styled from 'styled-components';
import { device } from '../../styles/device';


export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 28px;
  margin-top: 42px;
   @media ${device.tablet} { 
    margin-bottom: 40px;
    margin-top: 90px;
  }  
   @media ${device.desktop} { 
    margin-top: 60px;
  }  
`;
