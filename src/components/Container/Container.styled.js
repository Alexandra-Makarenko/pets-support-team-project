import styled from 'styled-components';
import { device } from '../../styles/device';

export const GlobalContainer = styled.div`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${device.desktop} {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
