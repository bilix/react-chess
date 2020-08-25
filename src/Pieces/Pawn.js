import Piece from './Piece';
import { isRightColumn, isLeftColumn } from '../Game/BoardGenerator';
import { upN, downN, upLeftN, upRightN, downLeftN, downRightN } from '../Game/Moves';

class Pawn extends Piece {
    constructor(props) {
        super(props);
        this.icon = this.color === 'w' ? '♙' : '♟';
        this.name = `${this.color}p`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        this.possibleMoves = [];
        const isEnemy = (square) => !!enemyPieces.find(eP => eP.position === square);

        const up1 = upN(position, 1);
        const up2 = upN(position, 2);
        const down1 = downN(position, 1);
        const down2 = downN(position, 2);
        const upLeft = upLeftN(position, 1);
        const upRight = upRightN(position, 1);
        const downLeft = downLeftN(position, 1);
        const downRight = downRightN(position, 1);

        const toLeftAttack = isLeftColumn(position) ? 0 : position;
        const toRightAttack = isRightColumn(position) ? 0 : position;

        const firstMove = this.color === 'w' ? position >= 49 : position <= 16;
        if (this.color === 'w') {
            if (!isEnemy(up1))
                this.addIfNotFriendly(up1, friendlyPieces);
            if (firstMove && !(isEnemy(up1) || isEnemy(up2)))
                this.addIfNotFriendly(up2, friendlyPieces);
            if ((toLeftAttack && isEnemy(upLeft)))
                this.possibleMoves.push(upLeft);
            if (toRightAttack && isEnemy(upRight))
                this.possibleMoves.push(upRight);
        } else {
            if (!isEnemy(down1))
                this.addIfNotFriendly(down1, friendlyPieces);
            if (firstMove && !(isEnemy(down1) || isEnemy(down2)))
                this.addIfNotFriendly(down2, friendlyPieces);
            if (toLeftAttack && isEnemy(downLeft))
                this.possibleMoves.push(downLeft);
            if (toRightAttack && isEnemy(downRight))
                this.possibleMoves.push(downRight);
        }
        return this.possibleMoves;
    }
}

export default Pawn;