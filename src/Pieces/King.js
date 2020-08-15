import Piece from './Piece';
import { isLeftColumn, isRightColumn } from '../Game/BoardGenerator';
import { upN, downN, leftN, rightN, upLeftN, upRightN, downLeftN, downRightN } from '../Game/Moves';

class King extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♔' : '♚';
        this.name = `${this.color}k`;
    }
    calculatePossibleMoves = (position, friendlyPieces) => {
        let moves = [];

        const up = upN(position, 1);
        const down = downN(position, 1);
        const left = leftN(position, 1);
        const right = rightN(position, 1);
        const upLeft = upLeftN(position, 1);
        const upRight = upRightN(position, 1);
        const downLeft = downLeftN(position , 1);
        const downRight = downRightN(position, 1);

    
        if (up > 0)
            this.addIfNotFriendly(up, friendlyPieces, moves);
        if (down <= 64)
            this.addIfNotFriendly(down, friendlyPieces, moves);
        if (!isRightColumn(left))
            this.addIfNotFriendly(left, friendlyPieces, moves);
        if (!isLeftColumn(right))
            this.addIfNotFriendly(right, friendlyPieces, moves);
        if (upLeft > 0 && !isRightColumn(upLeft))
            this.addIfNotFriendly(upLeft, friendlyPieces, moves);
        if (upRight > 0 && !isLeftColumn(upRight))
            this.addIfNotFriendly(upRight, friendlyPieces, moves);
        if (downLeft <= 64 && !isRightColumn(downLeft))
            this.addIfNotFriendly(downLeft, friendlyPieces, moves);
        if (downRight <= 64 && !isLeftColumn(downRight)) 
            this.addIfNotFriendly(downRight, friendlyPieces, moves);
    
        return moves;
    }
}

export default King;