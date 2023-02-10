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
  background-color: ${props => props.theme.backgrounds.bodyPrimary};

  @media ${device.tablet} {
    margin-bottom: 92px;
    max-width: 768px;
  }

  @media ${device.desktop} {
    margin-bottom: 59px;
    max-width: 1280px;
  }
`;
