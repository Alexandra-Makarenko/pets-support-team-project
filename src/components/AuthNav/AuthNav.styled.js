import styled from 'styled-components';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    main: {
      main: '#F59256',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: 14,
    textTransform: 'none',
  },
});

// export const LoginBtn = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 14,
//   padding: '8px 28px',
// });

export const LoginBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 24,
  padding: '8px 22px',
  marginRight: '20px',
});

export const RegisterBtn = styled(Button)`
  background-color: #f59256;
  font-size: 14px;
  border-radius: 20px;
`;
