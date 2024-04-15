import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { App } from './App.tsx';


const theme = {
  primaryBlack: '#121417',
  primaryGray: '#8A8A89',
  primaryYellow: '#F4C550',
  primaryLightYellow: '#FFDC86',
  lightYellow: '#FBE9BA',
  green: '#9FBAAE',
  lightGreen: '#CBDED3',
  blue: '#9FB7CE',
  lightBlue: '#BFD6EA',
  pink: '#E0A39A',
  lightPink: '#F2C0BD',
  orange: '#F0AA8D',
  lightOrange: '#F4C8BA',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
