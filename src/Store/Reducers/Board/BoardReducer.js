import {createSlice} from '@reduxjs/toolkit';
import { initialBoard, generateBoard, calculateAllPossibleMoves } from '../../../Game/BoardGenerator';
import { getGamePiece } from '../../../Game/Pieces';

const initialState = {
    board: generateBoard(initialBoard),
    selectedPiece: {
        square: 0,
        pieceId: null,
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
                pieceId: null,
            };
        },
        setMoves(state, action) {
            state.availableMoves = action.payload;
        },
        movePiece(state, action) {
            const destinationSquare = state.board[action.payload - 1];
            if (destinationSquare.pieceId) {
                const destinationPiece = getGamePiece(destinationSquare.pieceId);
                const color = destinationPiece.color;
                if (color === 'w') state.player1KilledPieces.push(destinationSquare.pieceId);
                else state.player2KilledPieces.push(destinationSquare.pieceId);
            }

            state.board[state.selectedPiece.square - 1].pieceId = null;
            state.board[action.payload - 1].pieceId = state.selectedPiece.pieceId;
            state.selectedPiece = {
                square: 0,
                pieceId: null,
            };
            state.availableMoves = [];
            calculateAllPossibleMoves(state.board, playerPieces(1, state.board), playerPieces(2, state.board));
        },
        resetBoard: () => initialState,
    }
});

const playerPieces = (player, board) => {
    let positions = [];
    const color = player === 1 ? 'w' : 'b';
    for (let i = 0; i < board.length; i++) {
        if (board[i].pieceId) {
            const piece = getGamePiece(board[i].pieceId);
            if(piece.color === color) positions.push({
                position: i+1, 
                pieceId: piece.id,
            });
        }
    }
    return positions;
}

export const boardSelector = (state) => state.board;
export const player1KilledPiecesSelector = (state) => state.board.player1KilledPieces;
export const player2KilledPiecesSelector = (state) => state.board.player2KilledPieces;

export const {selectSquare, removeSquareSelection, setMoves, movePiece, resetBoard} = actions;

export default reducer;