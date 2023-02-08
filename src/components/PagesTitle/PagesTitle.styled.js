import styled from 'styled-components';
// import { theme } from 'styles/theme';
import { device } from 'styles/device';

export const Title = styled.h2`
  font-family: 'Manrope700';
  font-size: 24px;
  margin-bottom: 28px;
  text-align: center;
  line-height: 34px;
  color: ${props => props.theme.fontColors.primary};
  text-align: center;
  margin-bottom: 28px;

  @media ${device.tablet} {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }
`;
