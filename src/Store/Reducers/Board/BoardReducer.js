import {createSlice} from '@reduxjs/toolkit';
import { initialBoard } from '../../../Board/BoardGenerator';

const {reducer, actions} = createSlice({
    name: 'board',
    initialState: {
        board: initialBoard,
        selectedPiece: {
            square: 0,
            piece: '',
        },
        availableMoves: [],
    },
    reducers: {
        selectSquare(state, action) {
            state.selectedPiece = action.payload;
        },
        removeSquareSelection(state) {
            state.selectedPiece = {
                square: 0,
                piece: '',
            };
        },
        setMoves(state, action) {
            state.availableMoves = action.payload;
        },
        movePiece(state, action) {
            state.board[state.selectedPiece.square - 1] = '';
            state.board[action.payload - 1] = state.selectedPiece.piece;
            state.selectedPiece = {
                square: 0,
                piece: '',
            };
            state.availableMoves = [];
        }
    }
});

const playerPieces = (player, board) => {
    let positions = [];
    const color = player === 1 ? 'w' : 'b';
    for (let i = 0; i < board.length; i++) {
        if (board[i]) {
            if(board[i][0] === color) positions.push(i+1);
        }
    }
    return positions;
}

export const player1PiecesSelector = (state) => {
    const board = state.board.board;
    return playerPieces(1, board);
};

export const player2PiecesSelector = (state) => {
    const board = state.board.board;
    return playerPieces(2, board);
};

export const {selectSquare, removeSquareSelection, setMoves, movePiece} = actions;

export default reducer;