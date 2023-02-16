import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Manrope500';
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #ff6101;
  background: #ffffff;
  border: 2px solid #ff6101;
  border-radius: 40px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  transition: transform ${p => p.theme.transition.first};

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 15px;
      &:hover {
        transform: scale(1.03);
        fill: #f59256;
        cursor: pointer;
      }
    }
  }
`;

// :hover {
//   transform: scale(1.2);
// }
