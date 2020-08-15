import React from 'react';
import { getPiece } from '../../Game/BoardGenerator';
import { StyledPieceIcon } from './PlayerInfo.styles';

const PieceIcon = ({player, piece}) => {
    const color = player === 1 ? 'w' : 'b';
    const pieceObject = getPiece(piece, color);

    return (
        <StyledPieceIcon>
            {pieceObject.icon}
        </StyledPieceIcon>
    )
}

export default PieceIcon;