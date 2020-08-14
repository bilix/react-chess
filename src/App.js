import React from 'react';
import {AppContainer} from './App.styles';
import './App.css';
import Board from './Components/Board/Board';
import { Provider } from "react-redux";
import store from './Store/store';
import Header from './Components/Header/Header';
import PlayerInfo from './Components/PlayerInfo/PlayerInfo';
import Actions from './Components/Actions/Actions';

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
