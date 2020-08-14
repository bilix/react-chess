import React from 'react';
import { StyledSquare } from './Board.styles';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece, boardSelector } from '../Store/Reducers/Board/BoardReducer';

const getSquareColor = (squareNumber) => {
    let row = Math.ceil(squareNumber/8);
    let startWhite = row % 2 === 1;
    return (startWhite && ((squareNumber % 8) % 2) === 1) || (!startWhite && ((squareNumber % 8) % 2) === 0);
}

const getAdjacentMoves = (square, moves, board) => {
    let adjacent = [];
    const left = square - 1;
    const right = square + 1;
    const top = square - 8;
    const bottom = square + 8;

    const adjacentHasEnemy = (position) => {
        return !!board[position - 1]
    };
    const addIfNoEnemy = (position, adjacency) => !adjacentHasEnemy(position) && adjacent.push(adjacency);
    
    if (moves.includes(left) && left % 8 !== 0) addIfNoEnemy(left, 'left');
    if (moves.includes(right) && right % 8 !== 1) addIfNoEnemy(right, 'right');
    if (moves.includes(top) && top > 0) addIfNoEnemy(top, 'top');
    if (moves.includes(bottom) && bottom < 64) addIfNoEnemy(bottom, 'bottom');

    return adjacent;
}

const Square = ({id, children}) => {
    const board = useSelector(state => boardSelector(state));
    const dispatch = useDispatch();

    const isAvailableMove = board.availableMoves.includes(id);
    if (isAvailableMove) {
        var adjacentMoves = getAdjacentMoves(id, board.availableMoves, board.board);
    }

    const isSelected = id === board.selectedPiece.square;
    const isKillable = isAvailableMove && children !== null;
    const isWhite = getSquareColor(id);

    const handleClick = () => {
        if (isAvailableMove) {
            dispatch(movePiece(id));
        }
    }
    return (
        <StyledSquare adjacent={adjacentMoves} onClick={() => handleClick()} key={`square_${id}`} killable={isKillable} available={isAvailableMove} selected={isSelected} white={isWhite}>
            {children}
        </StyledSquare>
    )
};

export default Square;