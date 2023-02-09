import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import MenuIcon from 'components/Nav/burger-menu.svg';
import { device } from '../../styles/device';

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
    gap: 80px;
  }
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(NavLink)`
  color: #181c27;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.04em;

  &:hover,
  :focus {
    font-weight: 700;
    color: ${props => props.theme.fontColors.buttonSecondary};
  }
`;

export const MobMenuBtn = styled.button`
  color: ${props => props.theme.fontColors.secondary};
  background-color: transparent;
  border: none;
  padding: 0 5px 0 0;
  margin: 0;
  cursor: pointer;

  @media ${device.desktop} {
    display: none;
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

// export const Burger = styled(MenuIcon)``;
