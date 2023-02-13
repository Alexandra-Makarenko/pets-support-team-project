import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { device } from '../../../styles/device';

 export const NavSection = styled.section`
  padding-top:30px;
`;
 export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.04em;
 
`;
 export const DesktopContainer = styled.ul`
  display: none;  
   @media ${device.desktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px;
  }
`;
export const TabletContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
   @media ${device.desktop} {
    display: none;
  }  
`;

 export const AuthContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
 
`;
export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  border: 2px solid ${props => props.theme.backgrounds.loaderPrimary};
  border-radius: 40px;
  padding: 8px 28px;
  color: ${props => props.theme.fontColors.buttonPrimary};
  background-color:${props => props.theme.backgrounds.buttonSecondary};
  font-weight: 500;
   &.active {
    color:  ${props => props.theme.fontColors.white};
    background-color:${props => props.theme.backgrounds.buttonPrimary};
  }
`;