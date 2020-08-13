import {createSlice} from '@reduxjs/toolkit';
import { initialBoard } from '../../../Board/BoardGenerator';

const {reducer, actions} = createSlice({
    name: 'board',
    initialState: {
        board: initialBoard,
        selectedSquare: null,
        availableMoves: [],
    },
    reducers: {
        selectSquare(state, action) {
            state.selectedSquare = action.payload;
        },
        removeSquareSelection(state) {
            state.selectedSquare = null;
        },
        setMoves(state, action) {
            state.availableMoves = action.payload;
        }
    }
});

export const {selectSquare, removeSquareSelection, setMoves} = actions;

export default reducer;