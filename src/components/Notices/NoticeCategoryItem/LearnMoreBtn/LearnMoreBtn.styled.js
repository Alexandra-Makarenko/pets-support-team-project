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
  ransition: color ${p => p.theme.transition.first},
    background-color ${p => p.theme.transition.first};
  :hover,
  :focus {
    color: #ffffff;
    background-color: #f59256;
  }
`;
