import React from 'react';
import { useSelector } from 'react-redux';
import { player1KilledPiecesSelector, player2KilledPiecesSelector } from '../../Store/Reducers/Board/BoardReducer';
import { InfoContainer, InfoTitle, KilledPiecesContainer } from './PlayerInfo.styles';
import PieceIcon from './PieceIcon';

const PlayerInfo = ({player}) => {
    const killedPieces = useSelector(state => player === 1 ? player1KilledPiecesSelector(state)
                                        : player2KilledPiecesSelector(state))

    return (
        <InfoContainer player={player}>
            <InfoTitle>Player {player}</InfoTitle>
            <KilledPiecesContainer>
                {killedPieces.map((piece, index) => <PieceIcon key={`dead_piece_${player}_${index}`} piece={piece} player={player} />)}
            </KilledPiecesContainer>
        </InfoContainer>
    )
}

export default PlayerInfo;