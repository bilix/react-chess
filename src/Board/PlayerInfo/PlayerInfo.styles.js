import styled from 'styled-components';

export const InfoContainer = styled.div`
    ${props =>{
        if(props.player === 1) {
            return `
                grid-area: player1;
            `;
        } else {
            return `
                grid-area: player2;
            `;
        }
    }}
    justify-self: center;
    padding: 50px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const InfoTitle = styled.div`
    font-weight: bold;
    font-size: 20px;
    align-text: center;
`;

export const KilledPiecesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 40px 0;
    min-width: 200px;
`;

export const StyledPieceIcon = styled.div`
    font-size: 45px;
`;