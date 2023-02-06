import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 74px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fdf7f2;

  padding: 30px;
`;

export const UserMenuWrapper = styled.div`
  margin-bottom: 60px;
`;

export const MobMenuItem = styled.li`
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

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
    color: #f59256;
  }
`;
