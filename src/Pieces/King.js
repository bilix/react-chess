import Piece from './Piece';

class King extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♔' : '♚';
        this.name = `${this.color}k`;
    }
    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        const up = position - 8;
        const down = position + 8;
        const left = position - 1;
        const right = position + 1;
        const upLeft = position - 9;
        const upRight = position - 7;
        const downLeft = position + 7;
        const downRight = position + 9;
    
        if (up > 0) this.addIfNotFriendly(up, friendlyPieces, moves);
        if (down < 64) this.addIfNotFriendly(down, friendlyPieces, moves);
        if (left % 8 !== 1) this.addIfNotFriendly(left, friendlyPieces, moves);
        if (right % 8 !== 0) this.addIfNotFriendly(right, friendlyPieces, moves);
        if (upLeft > 0 && upLeft % 8 !== 1) this.addIfNotFriendly(upLeft, friendlyPieces, moves);
        if (upRight > 0 && upRight % 8 !== 0) this.addIfNotFriendly(upRight, friendlyPieces, moves);
        if (downLeft < 64 && downLeft % 8 !== 1) this.addIfNotFriendly(downLeft, friendlyPieces, moves);
        if (downRight < 64 && downRight % 8 !== 0) this.addIfNotFriendly(downRight, friendlyPieces, moves);
    
        return moves;
    }
}

export default King;