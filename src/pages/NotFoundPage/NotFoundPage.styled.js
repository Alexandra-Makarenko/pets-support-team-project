import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: static;
  margin-top: 20px;
`;

export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  border: 2px solid ${props => props.theme.backgrounds.loaderPrimary};
  border-radius: 40px;
  padding: 12px 28px;
  color: ${props => props.theme.fontColors.white};
  background-color: ${props => props.theme.backgrounds.buttonPrimary};
  font-weight: 700;
  &:hover {
    background-color: ${props => props.theme.hovers.primary};
  }
`;
