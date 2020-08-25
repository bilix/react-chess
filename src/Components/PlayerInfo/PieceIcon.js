import React from 'react';
import { getGamePiece } from '../../Game/Pieces';
import { StyledPieceIcon } from './PlayerInfo.styles';

const PieceIcon = ({player, pieceId}) => {
    const color = player === 1 ? 'w' : 'b';
    const pieceObject = getGamePiece(pieceId, color);

    return (
        <StyledPieceIcon>
            {pieceObject.icon}
        </StyledPieceIcon>
    )
}

export default PieceIcon;