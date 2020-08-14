import React from 'react';
import {AppContainer} from './App.styles';
import './App.css';
import Board from './Board/Board';
import { Provider } from "react-redux";
import store from './Store/store';
import Header from './Header/Header';
import PlayerInfo from './Board/PlayerInfo/PlayerInfo';
import Actions from './Board/Actions/Actions';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <PlayerInfo player={1} />
        <Board />
        <PlayerInfo player={2} />
        <Actions />
      </AppContainer>
    </Provider>
  );
}

export default App;
