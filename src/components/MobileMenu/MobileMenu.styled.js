import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/device';

export const MobMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.backgrounds.bodyPrimary};

  @media ${device.desktop} {
    display: none;
  }
`;

export const MobMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 46px;

  @media ${device.tablet} {
    width: 768px;
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 46px;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 60px;
  @media ${device.tablet} {
    display: none;
  }
`;
export const MobMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const MobMenuItem = styled.li``;

export const MobMenulink = styled(NavLink)`
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.4;
  color: #181c27;
  text-decoration: none;

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
  padding: 0;
  margin: 0;
  cursor: pointer;

  @media ${device.desktop} {
    display: none;
  }
`;
