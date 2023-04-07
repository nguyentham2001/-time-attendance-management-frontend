import React from 'react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import store from './redux/store';
import AppRouter from './router';

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store()}>
        <AppRouter />
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
