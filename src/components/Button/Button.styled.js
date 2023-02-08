import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.primary
      ? props.theme.backgrounds.buttonPrimary
      : props.theme.backgrounds.buttonSecondary};
  color: ${props =>
    props.primary
      ? props.theme.fontColors.white
      : props.theme.fontColors.primary};
  border: 2px solid ${props => props.theme.backgrounds.buttonPrimary};
  padding: ${props => (props.icon ? '6px 36px' : '6px 28px')};
  border-radius: 40px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.04em;

  outline: 0;

  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;

  &:hover {
    background-color: ${props => props.theme.hovers.primary};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
