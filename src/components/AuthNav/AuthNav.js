import { ThemeProvider } from '@mui/material';
import { LoginBtn, RegisterBtn, theme } from './AuthNav.styled';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export const AuthNav = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <LoginBtn
          // sx={{ fontSize: 14, textTransform: 'none' }}
          color="main"
          variant="contained"
          onClick={navigate('/login')}
        >
          Login
        </LoginBtn>
        <RegisterBtn
          color="main"
          variant="outlined"
          onClick={navigate('/login')}
        >
          Register
        </RegisterBtn>
      </Stack>
    </ThemeProvider>
  );
};
