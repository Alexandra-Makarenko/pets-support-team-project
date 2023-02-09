import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/device';

export const MobMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.backgrounds.bodyPrimary};
  padding: 4px 34px;

  @media ${device.tablet} {
    top: 160px;
  }

  @media ${device.desktop} {
    margin-right: 80px;
    font-size: 32px;
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
