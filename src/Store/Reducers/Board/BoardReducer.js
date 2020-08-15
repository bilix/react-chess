import {createSlice} from '@reduxjs/toolkit';
import { initialBoard } from '../../../Game/BoardGenerator';

const initialState = {
    board: initialBoard,
    selectedPiece: {
        square: 0,
        piece: '',
    },
    availableMoves: [],
    player1KilledPieces: [],
    player2KilledPieces: [],
};

const {reducer, actions} = createSlice({
    name: 'board',
    initialState,
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
            const destinationSquare = state.board[action.payload - 1];
            if (destinationSquare) {
                const color = destinationSquare[0];
                const piece = destinationSquare[1];
                if (color === 'w') state.player1KilledPieces.push(piece);
                else state.player2KilledPieces.push(piece);
            }

            state.board[state.selectedPiece.square - 1] = '';
            state.board[action.payload - 1] = state.selectedPiece.piece;
            state.selectedPiece = {
                square: 0,
                piece: '',
            };
            state.availableMoves = [];
        },
        resetBoard: (state) => initialState,
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
export const  boardSelector = (state) => state.board;
export const player1KilledPiecesSelector = (state) => state.board.player1KilledPieces;
export const player2KilledPiecesSelector = (state) => state.board.player2KilledPieces;

export const {selectSquare, removeSquareSelection, setMoves, movePiece, resetBoard} = actions;

export default reducer;