import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  position: static;
`;

// export const LinkStyled = styled.a`
//   // padding: 13px 25px;
//   // border-radius: 30px;
//   // margin-top: 20px;
//   // border: ${p => p.theme.borders.none};
//   // font-family: ${p => p.theme.fonts.body};
//   // line-height: ${p => p.theme.lineHeights.body};
//   // font-size: ${p => p.theme.fontSizes[0]};
//   // letter-spacing: 0.04em;
//   // color: ${p => p.theme.fontColors.white};
//   // background: ${p => p.theme.backgrounds.bodyPrimary};
//   // box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
//   // &:hover,
//   // &:focus {
//   //   background: ${p => p.theme.hover.primary};
//   // }
// `;

export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  border: 2px solid ${props => props.theme.backgrounds.loaderPrimary};
  border-radius: 40px;
  padding: 8px 28px;
  color: ${props => props.theme.fontColors.buttonPrimary};
  background-color:${props => props.theme.backgrounds.buttonSecondary};
  font-weight: 500;
   &.active {
    color:  ${props => props.theme.fontColors.white};
    background-color:${props => props.theme.backgrounds.buttonPrimary};
  }
`;
