
import { Pawn, Rook, Knight, Queen, King, Bishop } from './Pieces/Piece';

export const initialBoard = ['r','h','b','q','k','b','h','r','8p','8','8','8','8','8p','r','h','b','q','k','b','h','r'];

const isNumber = (input) => !isNaN(input);

const getPiece = (piece, color) => {
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

export const initializeBoard = () => {
    let squares = [];
    let squareNumber = 1;
    for (let data of initialBoard) {
        const firstChar = data[0];
        if (isNumber(firstChar)) {
            if (data.length > 1) {
                const piece = data[1];
                for (let i = 0; i < +firstChar; i++) {
                    squares.push({
                        id: squareNumber++,
                        piece: getPiece(piece, squareNumber < 32 ? 'b' : 'w'),
                    })
                }
            }
            else {
                for (let i = 0; i < +firstChar; i++) {
                    squares.push({
                        id: squareNumber++,
                        piece: null,
                    })
                }
            }
        }
        else {
            squares.push({
                id: squareNumber++,
                piece: getPiece(data, squareNumber < 32 ? 'b' : 'w'),
            })
        }
    }
    return squares;
}