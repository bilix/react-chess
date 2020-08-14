import Piece from './Piece';
import { isRightColumn, isLeftColumn, upN, downN, upLeftN, upRightN, downLeftN, downRightN } from '../BoardGenerator';

class Pawn extends Piece {
    constructor(props) {
        super(props);
        this.icon = this.color === 'w' ? '♙' : '♟';
        this.name = `${this.color}p`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        const isEnemy = (square) => enemyPieces.includes(square);

        const toLeftAttack = isLeftColumn(position) ? 0 : position;
        const toRightAttack = isRightColumn(position) ? 0 : position;

        const firstMove = this.color === 'w' ? position >= 49 : position <= 16;
        if (this.color === 'w') {
            !isEnemy(upN(position, 1)) && this.addIfNotFriendly(upN(position, 1), friendlyPieces, moves);
            firstMove && !(isEnemy(upN(position, 1)) || isEnemy(upN(position, 2))) && this.addIfNotFriendly(upN(position, 2), friendlyPieces, moves);
            (toLeftAttack && isEnemy(upLeftN(position, 1))) && moves.push(upLeftN(position, 1));
            (toRightAttack && isEnemy(upRightN(position, 1))) && moves.push(upRightN(position, 1));
        } else {
            !isEnemy(downN(position, 1)) && this.addIfNotFriendly(downN(position, 1), friendlyPieces, moves);
            firstMove && !(isEnemy(downN(position, 1)) || isEnemy(downN(position, 2))) && this.addIfNotFriendly(downN(position, 2), friendlyPieces, moves);
            (toLeftAttack && isEnemy(downLeftN(position, 1))) && moves.push(downLeftN(position, 1));
            (toRightAttack && isEnemy(downRightN(position, 1))) && moves.push(downRightN(position, 1));
        }
        return moves;
    }
}

export default Pawn;