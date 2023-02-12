import styled from 'styled-components';

export const Button = styled.button`
  width: 248px;
  padding: 8px 0;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #f59256;
  transition: color ${p => p.theme.transition.first},
    background-color ${p => p.theme.transition.first};
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
    cursor: pointer;
  }
`;
