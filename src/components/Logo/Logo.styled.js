import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/device';

export const LogoLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.07em;
  text-decoration: none;
  color: inherit;

  @media ${device.desktop} {
    margin-right: 80px;
    font-size: 32px;
  }
`;

export const LogoAccent = styled.span`
  color: ${props => props.theme.fontColors.buttonSecondary};
`;
