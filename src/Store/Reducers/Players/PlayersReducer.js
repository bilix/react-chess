import {createSlice} from '@reduxjs/toolkit';
import {movePiece} from '../Board/BoardReducer';

const {reducer, actions} = createSlice({
    name: 'players',
    initialState: {
        currentPlayer: 1,
        player1KilledPieces: [],
        player2KilledPieces: [],
    },
    reducers: {
        selectPlayer(state, action) {
            state.currentPlayer = action.payload;
        },
    },
    extraReducers: {
        [movePiece]: (state, {payload}) => {
          state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        }
      }
});

export const currentPlayerSelector = (state) => state.players.currentPlayer;

export const {selectPlayer} = actions;

export default reducer;