import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
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
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/pets-support-team-project">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
