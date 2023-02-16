import styled from 'styled-components';
import { device } from 'styles/device';

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  width: 240px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-family: 'Manrope500';
  font-size: 16px;
  line-height: 22px;
  border-radius: 40px;
  color: ${props => props.theme.fontColors.white};
  background-color: ${props =>
    props.disabled ? '#A0A0A0' : props.theme.backgrounds.buttonPrimary};
  border: none;
  margin-bottom: 12px;
  &:hover,
  :focus {
    background-color: ${props => props.theme.hovers.primary};
    color: ${props => props.theme.fontColors.white};
  }
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 27px;
    padding-top: 8.5px;
    padding-bottom: 8.5px;
    width: 180px;
  }

  @media ${device.desktop} {
  }
`;
