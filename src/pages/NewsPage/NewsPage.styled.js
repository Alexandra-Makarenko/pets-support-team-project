import styled from 'styled-components';
import { device } from 'styles/device';

export const Section = styled.section`
  max-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;

  @media ${device.tablet} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 60px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
    margin-bottom: 140px;
  }
`;
