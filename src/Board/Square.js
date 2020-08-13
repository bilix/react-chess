import React from 'react';
import { StyledSquare, SquareOverlay } from './Board.styles';
import { useSelector } from 'react-redux';

const getSquareColor = (squareNumber) => {
    let row = Math.ceil(squareNumber/8);
    let startWhite = row % 2 === 1;
    return startWhite && ((squareNumber % 8) % 2) === 1 || !startWhite && ((squareNumber % 8) % 2) === 0;
}

const Square = ({id, children}) => {
    const board = useSelector(state => state.board);
    const isAvailableMove = board.availableMoves.includes(id);
    const isSelected = id === board.selectedSquare;
    const isKillable = isAvailableMove && children !== null;
    const isWhite = getSquareColor(id);
    return (
        <StyledSquare key={`square_${id}`} killable={isKillable} available={isAvailableMove} selected={isSelected} white={isWhite}>
            {children}
        </StyledSquare>
    )
};

export default Square;