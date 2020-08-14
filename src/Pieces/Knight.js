import Piece from './Piece';

class Knight extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♘' : '♞';
        this.name = `${this.color}h`;
    }

    calculatePossibleMoves = (position, friendlyPieces) => {
        let moves = [];
        const upLeft = position - 17;
        const upRight = position - 15;
        const leftUp = position - 10;
        const rightUp = position - 6;
        const downLeft = position + 15;
        const downRight = position + 17;
        const leftDown = position + 6;
        const rightDown = position + 10;

        if (upLeft > 0 && upLeft % 8 !== 0) this.addIfNotFriendly(upLeft, friendlyPieces, moves);
        if (upRight > 0 && upRight % 8 !== 1) this.addIfNotFriendly(upRight, friendlyPieces, moves);
        if (leftUp > 0 && leftUp % 8 !== 0 && leftUp % 8 !== 7) this.addIfNotFriendly(leftUp, friendlyPieces, moves);
        if (rightUp > 0 && rightUp % 8 !== 1 && rightUp % 8 !== 2) this.addIfNotFriendly(rightUp, friendlyPieces, moves);
        if (downLeft < 64 && downLeft % 8 !== 0) this.addIfNotFriendly(downLeft, friendlyPieces, moves);
        if (downRight < 64 && downRight % 8 !== 1) this.addIfNotFriendly(downRight, friendlyPieces, moves);
        if (leftDown < 64 && leftDown % 8 !== 0 && leftDown % 8 !== 7) this.addIfNotFriendly(leftDown, friendlyPieces, moves);
        if (rightDown < 64 && rightDown % 8 !== 1 && rightDown % 8 !== 2) this.addIfNotFriendly(rightDown, friendlyPieces, moves);

        return moves;
    }
}

export default Knight;