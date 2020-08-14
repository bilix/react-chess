import {createSlice} from '@reduxjs/toolkit';
import {movePiece, resetBoard} from '../Board/BoardReducer';

const {reducer, actions} = createSlice({
    name: 'players',
    initialState: {
        currentPlayer: 1,
    },
    reducers: {
        selectPlayer(state, action) {
            state.currentPlayer = action.payload;
        },
    },
    extraReducers: {
        [movePiece]: (state) => {
          state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        },
        [resetBoard]: (state) => {
            state.currentPlayer = 1;
        }
      }
});

export const currentPlayerSelector = (state) => state.players.currentPlayer;

export const {selectPlayer} = actions;

export default reducer;