import styled from '@emotion/styled';
import { device } from 'styles/device';

export const ModalNoticeBox = styled.div`
  max-width: 280px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 40px;

  @media ${device.tablet} {
    max-width: 608px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;
