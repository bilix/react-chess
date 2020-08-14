import React from 'react';
import { StyledSquare } from './Board.styles';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece } from '../Store/Reducers/Board/BoardReducer';

const getSquareColor = (squareNumber) => {
    let row = Math.ceil(squareNumber/8);
    let startWhite = row % 2 === 1;
    return (startWhite && ((squareNumber % 8) % 2) === 1) || (!startWhite && ((squareNumber % 8) % 2) === 0);
}

const Square = ({id, children}) => {
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();

    const isAvailableMove = board.availableMoves.includes(id);
    const isSelected = id === board.selectedPiece.square;
    const isKillable = isAvailableMove && children !== null;
    const isWhite = getSquareColor(id);

    const handleClick = () => {
        if (isAvailableMove) {
            dispatch(movePiece(id));
        }
    }
    return (
        <StyledSquare onClick={() => handleClick()} key={`square_${id}`} killable={isKillable} available={isAvailableMove} selected={isSelected} white={isWhite}>
            {children}
        </StyledSquare>
    )
};

export default Square;