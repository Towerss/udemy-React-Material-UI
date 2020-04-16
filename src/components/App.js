import React from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/Theme';

function App() {
  // console.log(JSON.stringify(theme, null, 2))
  return (
    <ThemeProvider theme={theme}>
      <Header />
       Hello
    </ThemeProvider>
  );
}

export default App;
