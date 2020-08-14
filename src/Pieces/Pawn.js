import Piece from './Piece';

class Pawn extends Piece {
    constructor(props) {
        super(props);
        this.icon = this.color === 'w' ? '♙' : '♟';
        this.name = `${this.color}p`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        const isEnemy = (square) => enemyPieces.includes(square);
        const toLeftAttack = position % 8 === 1 ? 0 : position;
        const toRightAttack = position % 8 === 0 ? 0 : position;

        const firstMove = this.color === 'w' ? position >= 49 : position <= 16;
        if (this.color === 'w') {
            !isEnemy(position - 8) && this.addIfNotFriendly(position - 8, friendlyPieces, moves);
            firstMove && !(isEnemy(position - 8) || isEnemy(position - 16)) && this.addIfNotFriendly(position - 16, friendlyPieces, moves);
            (toLeftAttack && isEnemy(position - 9)) && moves.push(position - 9);
            (toRightAttack && isEnemy(position - 7)) && moves.push(position - 7);
        } else {
            !isEnemy(position + 8) && this.addIfNotFriendly(position + 8, friendlyPieces, moves);
            firstMove && !(isEnemy(position + 8) || isEnemy(position + 16)) && this.addIfNotFriendly(position + 16, friendlyPieces, moves);
            (toLeftAttack && isEnemy(position + 7)) && moves.push(position + 7);
            (toRightAttack && isEnemy(position + 9)) && moves.push(position + 9);
        }
        return moves;
    }
}

export default Pawn;