import Pawn from '../Pieces/Pawn';
import Knight from '../Pieces/Knight';
import Rook from '../Pieces/Rook';
import Queen from '../Pieces/Queen';
import King from '../Pieces/King';
import Bishop from '../Pieces/Bishop';

export const createPiece = (piece, color, id) => {
    switch (piece) {
        case 'p':
            return new Pawn({color, id});
        case 'r':
            return new Rook({color, id});
        case 'h':
            return new Knight({color, id});
        case 'q':
            return new Queen({color, id});
        case 'k':
            return new King({color, id});
        case 'b':
            return new Bishop({color, id});
        default:
            return null;
    }
}

export const getGamePiece = id => GamePieces.find(gp => gp.id === id);

export const GamePieces = [];