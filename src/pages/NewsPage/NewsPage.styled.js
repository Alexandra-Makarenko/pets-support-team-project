import styled from 'styled-components';
import { device } from 'styles/device';

export const Section = styled.section`
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
