import Pawn from '../Pieces/Pawn';
import Knight from '../Pieces/Knight';
import Rook from '../Pieces/Rook';
import Queen from '../Pieces/Queen';
import King from '../Pieces/King';
import Bishop from '../Pieces/Bishop';

export const initialBoard = [
    'br','bh','bb','bq','bk','bb','bh','br',
    'bp','bp','bp','bp','bp','bp','bp','bp',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    'wp','wp','wp','wp','wp','wp','wp','wp',
    'wr','wh','wb','wq','wk','wb','wh','wr'
];

export const verticalBorder = [8,7,6,5,4,3,2,1];
export const horizontalBorder = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];

export const getPiece = (piece, color) => {
    switch (piece) {
        case 'p':
            return new Pawn({color});
        case 'r':
            return new Rook({color});
        case 'h':
            return new Knight({color});
        case 'q':
            return new Queen({color});
        case 'k':
            return new King({color});
        case 'b':
            return new Bishop({color});
        default:
            return null;
    }
}

export const generateBoard = (board) => {
    let squares = [];
    let squareNumber = 1;
    for (let data of board) {
        if (!data) {
            squares.push({
                id: squareNumber++,
                piece: null,
            })
        } else {
            const color = data[0];
            const piece = data[1];
            squares.push({
                piece: getPiece(piece, color),
                id: squareNumber++,
            })
        }
    }
    return squares;
}

export const getSquareColor = (squareNumber) => {
    let row = Math.ceil(squareNumber/8);
    let startWhite = row % 2 === 1;
    return (startWhite && ((squareNumber % 8) % 2) === 1) || (!startWhite && ((squareNumber % 8) % 2) === 0);
}

export const getAdjacentMoves = (square, moves, board) => {
    let adjacent = [];
    const left = square - 1;
    const right = square + 1;
    const top = square - 8;
    const bottom = square + 8;

    const adjacentHasEnemy = (position) => {
        return !!board[position - 1]
    };
    const addIfNoEnemy = (position, adjacency) => !adjacentHasEnemy(position) && adjacent.push(adjacency);
    
    if (moves.includes(left) && !isRightColumn(left)) addIfNoEnemy(left, 'left');
    if (moves.includes(right) && !isLeftColumn(right)) addIfNoEnemy(right, 'right');
    if (moves.includes(top) && top > 0) addIfNoEnemy(top, 'top');
    if (moves.includes(bottom) && bottom < 64) addIfNoEnemy(bottom, 'bottom');

    return adjacent;
}

export const getColorFromPlayer = (player) => player === 1 ? 'w' : 'b';
export const getPlayerFromColor = (color) => color === 'w' ? 1 : 2;

export const isRightColumn = (squareNumber) => squareNumber % 8 === 0;
export const isLeftColumn = (squareNumber) => squareNumber % 8 === 1;

