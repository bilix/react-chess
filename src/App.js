import React from 'react';
import {AppContainer} from './App.styles';
import './App.css';
import Board from './Board/Board';
import { Provider } from "react-redux";
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Board />
      </AppContainer>
    </Provider>
  );
}

export default App;
