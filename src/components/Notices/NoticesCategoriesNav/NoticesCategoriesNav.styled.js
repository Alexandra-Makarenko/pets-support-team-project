import styled from 'styled-components';
import { NavLink } from "react-router-dom";

 export const NavSection = styled.section`
  padding-top:30px;
`;
 export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.04em;
 
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