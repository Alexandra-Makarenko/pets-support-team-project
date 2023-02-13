import styled from 'styled-components';
import { device } from '../../../styles/device';

const AddNotice = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: none;
  background-color: #f59256;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media ${device.preTablet} {
    display: none;
  }
`;
export { AddNotice };
