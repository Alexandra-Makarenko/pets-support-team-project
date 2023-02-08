import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 84px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.backgrounds.bodyPrimary};

  padding: 4px 34px;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 60px;
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

  color: inherit;
  text-decoration: none;

  &:hover,
  :focus {
    font-weight: 700;
    color: ${props => props.theme.fontColors.buttonSecondary};
  }
`;
