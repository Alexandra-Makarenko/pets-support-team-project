import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './fonts/Manrope/Manrope-Bold.ttf';
import './fonts/Manrope/Manrope-Medium.ttf';
import './fonts/Manrope/Manrope-Regular.ttf';
import './fonts/Manrope/Manrope-SemiBold.ttf';
import './fonts/Inter/Inter-Bold.ttf';
import './fonts/Inter/Inter-Medium.ttf';
import './fonts/Inter/Inter-Regular.ttf';
import './fonts/Montserrat/Montserrat-Medium.ttf';
import './fonts/Montserrat/Montserrat-Regular.ttf';
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/pets-support-team-project">
        <App />
      </BrowserRouter>
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
