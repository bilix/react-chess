import Piece from './Piece';
import { isRightColumn, isLeftColumn } from '../Game/BoardGenerator';

class Knight extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♘' : '♞';
        this.name = `${this.color}h`;
    }

    calculatePossibleMoves = (position, friendlyPieces) => {
        this.possibleMoves = [];
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
            this.addIfNotFriendly(upLeft, friendlyPieces);
        if (upRight > 0 && !isLeftColumn(upRight)) 
            this.addIfNotFriendly(upRight, friendlyPieces);
        if (leftUp > 0 && !isToTheRight(leftUp)) 
            this.addIfNotFriendly(leftUp, friendlyPieces);
        if (rightUp > 0 && !isToTheLeft(rightUp)) 
            this.addIfNotFriendly(rightUp, friendlyPieces);
        if (downLeft <= 64 && !isRightColumn(downLeft)) 
            this.addIfNotFriendly(downLeft, friendlyPieces);
        if (downRight <= 64 && !isLeftColumn(downRight)) 
            this.addIfNotFriendly(downRight, friendlyPieces);
        if (leftDown <= 64 && !isToTheRight(leftDown)) 
            this.addIfNotFriendly(leftDown, friendlyPieces);
        if (rightDown <= 64 && !isToTheLeft(rightDown)) 
            this.addIfNotFriendly(rightDown, friendlyPieces);

        return this.possibleMoves;
    }
}

export default Knight;