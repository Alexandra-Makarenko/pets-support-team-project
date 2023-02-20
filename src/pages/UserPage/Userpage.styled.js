import styled from 'styled-components';
import { device } from 'styles/device';

// @media ${device.tablet} {}
// @media ${device.desktop} {}

export const UserContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;
