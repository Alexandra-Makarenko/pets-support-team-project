import styled from 'styled-components';
import { device } from '../../styles/device';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
  margin-bottom: 42px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    margin-bottom: 92px;
    max-width: 768px;
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    margin-bottom: 59px;
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
