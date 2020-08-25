import Piece from './Piece';

class Bishop extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♗' : '♝';
        this.name = `${this.color}b`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        this.possibleMoves = [];
        this.calculateDiagonalMoves(position, friendlyPieces, enemyPieces);
        return this.possibleMoves;
    }
}

export default Bishop;