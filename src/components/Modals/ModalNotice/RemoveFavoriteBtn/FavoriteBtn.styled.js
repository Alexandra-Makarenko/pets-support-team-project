import styled from 'styled-components';
import { device } from 'styles/device';

export const Button = styled.button`
  font-family: 'Manrope500';
  width: 100%;
  margin-top: 12px;
  padding-top: 7px;
  padding-bottom: 7px;
  color: #ff6101;
  background: #ffffff;
  border: 2px solid #ff6101;
  border-radius: 40px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  cursor: pointer;
  @media ${device.tablet} {
    margin-top: 0px;
    width: 160px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 15px;
      &:hover {
        fill: #f59256;
        cursor: pointer;
      }
    }
  }
`;

// :hover {
//   transform: scale(1.2);
// }
