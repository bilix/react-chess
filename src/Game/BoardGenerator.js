import { createPiece, GamePieces, getGamePiece } from './Pieces';

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

export const generateBoard = (board) => {
    let squares = [];
    let whitePieces = [];
    let blackPieces = [];
    let squareNumber = 1;
    let pieceId = 1;
    for (let data of board) {
        if (!data) {
            squares.push({
                id: squareNumber++,
                pieceId: null,
            })
        } else {
            const color = data[0];
            const piece = data[1];
            const pieceInstance = createPiece(piece, color, pieceId++);
            squares.push({
                pieceId: pieceInstance.id,
                id: squareNumber,
            });
            if (color === 'w') {
                whitePieces.push({
                    position: squareNumber,
                    pieceId: pieceInstance.id,
                })
            } else {
                blackPieces.push({
                    position: squareNumber,
                    pieceId: pieceInstance.id,
                })
            }
            squareNumber++;
            GamePieces.push(pieceInstance);
        }
    }
    calculateAllPossibleMoves(squares, whitePieces, blackPieces);
    return squares;
}

export const calculateAllPossibleMoves = (squares, whitePieces, blackPieces) => {
    squares.forEach(sq => {
        if (sq.pieceId) {
            const piece = getGamePiece(sq.pieceId);
            const friendlyPieces = piece.color === 'w' ? whitePieces : blackPieces;
            const enemyPieces = piece.color === 'w' ? blackPieces : whitePieces;
            piece.calculatePossibleMoves(sq.id, friendlyPieces, enemyPieces);
        }
    })
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
        return !!board[position - 1].pieceId;
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

