import Piece from './Piece';

class Rook extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♖' : '♜';
        this.name = `${this.color}r`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        this.possibleMoves = [];
        this.calculateVerticalHorizontalMoves(position, friendlyPieces, enemyPieces);
        return this.possibleMoves;
    }
}

export default Rook;