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