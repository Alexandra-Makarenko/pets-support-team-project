import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as User } from './user-btn-icon.svg';
import { device } from '../../styles/device';

export const UserMenuBtn = styled(Link)`
  text-decoration: none;
`;

export const UserIcon = styled(User)`
  width: 17px;
  height: 17px;
  margin-right: 14px;

  @media ${device.tablet} {
    width: 23px;
    height: 23px;
  }
`;
