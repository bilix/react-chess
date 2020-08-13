import {createSlice} from '@reduxjs/toolkit';

const {reducer, actions} = createSlice({
    name: 'players',
    initialState: {
        currentPlayer: 1,
        player1Pieces: [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64],
        player1KilledPieces: [],
        player2Pieces: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        player2KilledPieces: [],
    },
    reducers: {
        selectPlayer(state, action) {
            state.currentPlayer = action.payload;
        },
    }
});

export const currentPlayerSelector = (state) => state.players.currentPlayer;
export const player1PiecesSelector = (state) => state.players.player1Pieces;
export const player2PiecesSelector = (state) => state.players.player2Pieces;

export const {selectPlayer} = actions;

export default reducer;