import { Directions, getMoveByDirection, notValidMoveByDirection } from "../Game/Moves";
import { getGamePiece } from "../Game/Pieces";

class Piece {
    constructor(props) {
        this.color = props.color;
        this.id = props.id;
        this.canKillKing = false;
        this.possibleMoves = [];
    }

    isFriendly = (square, friendlyPieces) => !!friendlyPieces.find(p => p.position === square);
    isEnemy = (square, enemyPieces) => !!enemyPieces.find(p => p.position === square);

    addMoves = (initialPosition, direction, distance, friendlyPieces, enemyPieces) => {
        const move = getMoveByDirection(direction)(initialPosition, distance);
        if (notValidMoveByDirection(move, direction) || this.isFriendly(move, friendlyPieces)) return;
        else {
            this.possibleMoves.push(move);
            if (!this.isEnemy(move, enemyPieces)) {
                this.addMoves(initialPosition, direction, distance + 1, friendlyPieces, enemyPieces);
            } else {
                const enemy = enemyPieces.find(eP => eP.position === move);
                const enemyPiece = getGamePiece(enemy.pieceId);
                if (enemyPiece.name.includes('k')) {
                    this.canKillKing = true;
                }
            }
        }
    }

    calculateDiagonalMoves = (position, friendlyPieces, enemyPieces) => {
        this.addMoves(position, Directions.UP_LEFT, 1, friendlyPieces, enemyPieces);
        this.addMoves(position, Directions.UP_RIGHT, 1, friendlyPieces, enemyPieces);
        this.addMoves(position, Directions.DOWN_RIGHT, 1, friendlyPieces, enemyPieces);
        this.addMoves(position, Directions.DOWN_LEFT, 1, friendlyPieces, enemyPieces);
    }

    calculateVerticalHorizontalMoves = (position, friendlyPieces, enemyPieces) => {
        this.addMoves(position, Directions.UP, 1, friendlyPieces, enemyPieces);
        this.addMoves(position, Directions.DOWN, 1, friendlyPieces, enemyPieces);
        this.addMoves(position, Directions.LEFT, 1, friendlyPieces, enemyPieces);
        this.addMoves(position, Directions.RIGHT, 1, friendlyPieces, enemyPieces);
    }

    addIfNotFriendly = (position, friendlyPieces) => {
        if(!friendlyPieces.find(fP => fP.position === position)) this.possibleMoves.push(position);
    }
}

export default Piece;