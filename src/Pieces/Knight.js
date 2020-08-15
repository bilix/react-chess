import Piece from './Piece';
import { isRightColumn, isLeftColumn } from '../Game/BoardGenerator';

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

        const isToTheLeft = (position) => isLeftColumn(position) || position % 8 === 2;
        const isToTheRight = (position) => isRightColumn(position) || position % 8 === 7; 

        if (upLeft > 0 && !isRightColumn(upLeft)) 
            this.addIfNotFriendly(upLeft, friendlyPieces, moves);
        if (upRight > 0 && !isLeftColumn(upRight)) 
            this.addIfNotFriendly(upRight, friendlyPieces, moves);
        if (leftUp > 0 && !isToTheRight(leftUp)) 
            this.addIfNotFriendly(leftUp, friendlyPieces, moves);
        if (rightUp > 0 && !isToTheLeft(rightUp)) 
            this.addIfNotFriendly(rightUp, friendlyPieces, moves);
        if (downLeft < 64 && !isRightColumn(downLeft)) 
            this.addIfNotFriendly(downLeft, friendlyPieces, moves);
        if (downRight < 64 && !isLeftColumn(downRight)) 
            this.addIfNotFriendly(downRight, friendlyPieces, moves);
        if (leftDown < 64 && !isToTheRight(leftDown)) 
            this.addIfNotFriendly(leftDown, friendlyPieces, moves);
        if (rightDown < 64 && !isToTheLeft(rightDown)) 
            this.addIfNotFriendly(rightDown, friendlyPieces, moves);

        return moves;
    }
}

export default Knight;