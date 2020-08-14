import styled from 'styled-components';

export const GameBoard = styled.div`
    display: grid;
    grid-template-columns: 20px repeat(8, 75px) 20px;
    grid-template-rows: 20px repeat(8, 75px) 20px;
    grid-area: board;
    justify-self: center;
    align-self: center;
`;

export const StyledSquare = styled.div`
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: relative;
    ${props => {
        if (props.selected) {
            return `
                background-color: rgb(4, 41, 247, 0.7);
                border: 4px solid rgb(4, 41, 247);
            `;
        } else if (props.killable) {
            return `
                background-color: rgb(244, 57, 0, 0.7);
                border: 4px solid rgb(244, 57, 0);
                cursor: pointer;
            `;
        } else if (props.available) {
            return `
                background-color: rgb(27, 145, 11, 0.7);
                border: 4px solid rgb(27, 145, 11);
                cursor: pointer;
                ${getAdjacentBorders(props.adjacent)}
            `;
        } else if (props.white) {
            return  `
                background-color: rgb(223, 203, 167, 1);
            `;
        } else {
            return `
                background-color: rgb(125, 67, 38, 1)
            `;
        }

    }}
`;

const getAdjacentBorders = (adjacent) => {
    let ret = ``;
    if (!adjacent || adjacent.length === 0) return;
    for (let border of adjacent) {
        ret += `
            border-${border}-width: 2px;
        `;
    }
    return ret;
}

export const Border = styled.div`
    background-color: #491E10;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    ${props => props.top && `
        border-bottom: 1px solid #DFCBA7;
    `}
    ${props => props.bottom && `
        border-top: 1px solid #DFCBA7;
    `}
    ${props => props.left && `
        border-right: 1px solid #DFCBA7;
    `}
    ${props => props.right && `
        border-left: 1px solid #DFCBA7;
    `}
`;

export const StyledPiece = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    ${props => {
        if (props.currentPlayer) {
            return  `cursor: pointer;`
        } 
    }}
    
`;