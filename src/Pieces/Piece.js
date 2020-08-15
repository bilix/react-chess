import { addDiagonalUpLeftMoves, addDiagonalUpRightMoves, addDiagonalDownRightMoves, addDiagonalDownLeftMoves, addUpMoves, addDownMoves, addLeftMoves, addRightMoves } from "../Game/Moves";

class Piece {
    constructor(props) {
        this.color = props.color;
    }

    calculatePossibleMoves = () => [];

    calculateDiagonalMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        const isFriendly = square => friendlyPieces.includes(square);
        const isEnemy = square => enemyPieces.includes(square);
        
        addDiagonalUpLeftMoves(position, 1, moves, isFriendly, isEnemy);
        addDiagonalUpRightMoves(position, 1, moves, isFriendly, isEnemy);
        addDiagonalDownRightMoves(position, 1, moves, isFriendly, isEnemy);
        addDiagonalDownLeftMoves(position, 1, moves, isFriendly, isEnemy);

        return moves;
    }

    calculateVerticalHorizontalMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        const isFriendly = square => friendlyPieces.includes(square);
        const isEnemy = square => enemyPieces.includes(square);
        
        addUpMoves(position, 1, moves, isFriendly, isEnemy);
        addDownMoves(position, 1, moves, isFriendly, isEnemy);
        addLeftMoves(position, 1, moves, isFriendly, isEnemy);
        addRightMoves(position, 1, moves, isFriendly, isEnemy);
        
        return moves;
    }

    addIfNotFriendly = (position, friendlyPieces, moves) => {
        if(!friendlyPieces.includes(position)) moves.push(position);
    }
}

export default Piece;