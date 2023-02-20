import styled from 'styled-components';
import { device } from 'styles/device';

export const ErrorText = styled.p`
  font-family: 'Manrope400';
  display: block;
  max-width: 240px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04em;
  margin-top: 4px;
  margin-bottom: 8px;
  color: red;

  @media ${device.tablet} {
    max-width: 448px;
  }
`;
