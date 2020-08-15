import React from 'react';
import { StyledPiece } from './Board.styles';
import { selectSquare, setMoves } from '../../Store/Reducers/Board/BoardReducer';
import { useSelector, useDispatch } from 'react-redux';
import { currentPlayerSelector } from '../../Store/Reducers/Players/PlayersReducer';
import { player1PiecesSelector, player2PiecesSelector } from '../../Store/Reducers/Board/BoardReducer';
import { getPlayerFromColor } from '../../Game/BoardGenerator';

const PieceComponent = ({piece, position}) =>{
    const currentPlayer = useSelector(state => currentPlayerSelector(state));
    const player1Pieces = useSelector(state => player1PiecesSelector(state));
    const player2Pieces = useSelector(state => player2PiecesSelector(state));
    const dispatch = useDispatch();
    
    const player = getPlayerFromColor(piece.color);

    const friendlyPieces = player === 1 ? player1Pieces : player2Pieces;
    const enemyPieces = player === 1 ? player2Pieces : player1Pieces;

    const isCurrentPlayer = player === currentPlayer;


    const handleClick = () => {
        if (!isCurrentPlayer) return null;
        dispatch(selectSquare({
            square: position,
            piece: piece.name,
        }));
        const movements = piece.calculatePossibleMoves(position, friendlyPieces, enemyPieces);
        dispatch(setMoves(movements));
    }

    return (
        <StyledPiece currentPlayer={isCurrentPlayer} onClick={handleClick}>
            {piece.icon}
        </StyledPiece>
    )
};

export default React.memo(PieceComponent);