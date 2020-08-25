import React from 'react';
import { StyledPiece } from './Board.styles';
import { selectSquare, setMoves } from '../../Store/Reducers/Board/BoardReducer';
import { useSelector, useDispatch } from 'react-redux';
import { currentPlayerSelector } from '../../Store/Reducers/Players/PlayersReducer';
import { getPlayerFromColor } from '../../Game/BoardGenerator';
import { getGamePiece } from '../../Game/Pieces';

const PieceComponent = ({pieceId, position}) =>{
    const currentPlayer = useSelector(state => currentPlayerSelector(state));
    const dispatch = useDispatch();

    const pieceObject = getGamePiece(pieceId);
    
    const player = getPlayerFromColor(pieceObject.color);

    const isCurrentPlayer = player === currentPlayer;


    const handleClick = () => {
        if (!isCurrentPlayer) return null;
        dispatch(selectSquare({
            square: position,
            pieceId,
        }));
        const movements = pieceObject.possibleMoves;
        dispatch(setMoves(movements));
    }

    return (
        <StyledPiece currentPlayer={isCurrentPlayer} onClick={handleClick}>
            {pieceObject.icon}
        </StyledPiece>
    )
};

export default React.memo(PieceComponent);