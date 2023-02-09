import styled from 'styled-components';
import { device } from '../../styles/device';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 42px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    margin-bottom: 92px;
  }

  @media ${device.desktop} {
    margin-bottom: 59px;
  }
`;
