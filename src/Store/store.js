import {configureStore} from '@reduxjs/toolkit';
import boardReducer from './Reducers/Board/BoardReducer';
import playersReducer from './Reducers/Players/PlayersReducer';

const store = configureStore({
    reducer: {
        board: boardReducer,
        players: playersReducer,
    }
});

export default store;