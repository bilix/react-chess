import React from 'react';
import { StyledSquare } from './Board.styles';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece, boardSelector } from '../../Store/Reducers/Board/BoardReducer';
import { getSquareColor, getAdjacentMoves } from '../../Game/BoardGenerator';

const Square = ({squareNumber, children}) => {
    const board = useSelector(state => boardSelector(state));
    const dispatch = useDispatch();

    const isAvailableMove = board.availableMoves.includes(squareNumber);
    if (isAvailableMove) {
        //to fix double borders, look for better solution
        var adjacentMoves = getAdjacentMoves(squareNumber, board.availableMoves, board.board);
    }

    const isSelected = squareNumber === board.selectedPiece.square;
    const isKillable = isAvailableMove && children !== null;
    const isWhite = getSquareColor(squareNumber);

    const handleClick = () => {
        if (isAvailableMove) {
            dispatch(movePiece(squareNumber));
        }
    }
    return (
        <StyledSquare key={`square_${squareNumber}`} adjacent={adjacentMoves} onClick={() => handleClick()} key={`square_${squareNumber}`} killable={isKillable} available={isAvailableMove} selected={isSelected} white={isWhite}>
            {children}
        </StyledSquare>
    )
};

export default React.memo(Square);