import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const MobMenuBtn = styled.button`
  color: ${props => props.theme.fontColors.secondary};
  background-color: transparent;
  border: none;

  padding: 0;
  margin: 0;

  cursor: pointer;
`;

export const Burger = styled(MenuIcon)``;
