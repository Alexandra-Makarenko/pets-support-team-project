import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/device';
import { ReactComponent as BurgerIco } from './burger-menu.svg';
import { ReactComponent as CloseIco } from './x.svg';


export const NavBlock = styled.nav`
  display: flex;
  align-items: center;

  @media ${device.desktop} {
    justify-content: space-between;
    width: 100%;
  }
`;

export const MenuList = styled.ul`
  display: none;

  @media ${device.desktop} {
    display: flex;
    align-items: center;
    /* margin-right: ; */
  }
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 80px;
  }
`;

export const MenuLink = styled(NavLink)`
  display: inline-block;
  color: #181c27;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.04em;

  &:hover,
  :focus {
    color: ${props => props.theme.fontColors.buttonSecondary};
    text-shadow: 1px 0 0 ${props => props.theme.fontColors.buttonSecondary};
  }

  @media ${device.desktop} {
    font-family: 'Manrope700';
    line-height: 27px;
    color: ${props => props.theme.fontColors.navFont};
  }
  &:focus {
    color: none;
    text-shadow: none;
  }
  &.active {
    color: ${props => props.theme.fontColors.buttonSecondary};
    text-decoration: underline;
  }
`;

export const MobMenuBtn = styled.button`
  z-index: 99;
  color: ${props => props.theme.fontColors.secondary};
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  @media ${device.desktop} {
    display: none;
  }
`;

export const Burger = styled(BurgerIco)`
  display: block;
  padding: 0;
  margin-right: 5px;
  color: inherit;
`;

export const Close = styled(CloseIco)`
  display: block;
  color: inherit;

  @media ${device.tablet} {
    padding: 0 10px 0 0;
  }
`;

export const UserMenuWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 25px;
  }

  @media ${device.desktop} {
    margin-right: 0;
  }
`;