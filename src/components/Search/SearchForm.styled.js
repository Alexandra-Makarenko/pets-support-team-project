import styled from 'styled-components';
import { ReactComponent as Search } from '../../logo/search.svg';
import { device } from 'styles/device';
import { ReactComponent as CloseLine } from '../../logo/close_line.svg';

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadows.searchBox};
  padding-left: 12px;
  outline: none;
  font-family: 'Manrope500';
  background: ${props => props.theme.backgrounds.bodySecondary};
  &::-webkit-input-placeholder,
  &:-moz-placeholder,
  &::-moz-placeholder,
  :-ms-input-placeholder {
    ${props => props.theme.fontColors.grey};
  }
  color: ${props => props.theme.fontColors.grey};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  @media ${device.tablet} {
    border-radius: 40px;
    padding-left: 20px;
    font-size: 20px;
    line-height: 27px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${device.desktop} {
    font-family: 'Inter500';
    line-height: 24px;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-bottom: ${props => props.mbtn.mobile}px;
  width: 280px;
  height: 40px;

  @media ${device.tablet} {
    width: 608px;
    height: 44px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${props => props.mbtn.rest}px;
  }
`;  

export const SearchLogo = styled(Search)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-14px, -50%);

  @media ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const CloseLineLogo = styled(CloseLine)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translate(-14px, -50%);

  @media ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;
