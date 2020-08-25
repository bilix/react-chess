import Piece from './Piece';

class Queen extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♕' : '♛';
        this.name = `${this.color}q`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        this.possibleMoves = [];
        this.calculateVerticalHorizontalMoves(position, friendlyPieces, enemyPieces);
        this.calculateDiagonalMoves(position, friendlyPieces, enemyPieces);
        return this.possibleMoves;
    }

}

export default Queen;