import { Button, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { theme } from './UserMenu.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          sx={{ fontSize: 14, textTransform: 'none' }}
          color="primary"
          variant="contained"
          onClick={() => navigate('/user')}
          startIcon={<AccountCircleIcon />}
        >
          Account
        </Button>
      </ThemeProvider>
    </>
  );
};
