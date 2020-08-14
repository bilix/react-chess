import Piece from './Piece';

class Rook extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♖' : '♜';
        this.name = `${this.color}r`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        return this.calculateVerticalHorizontalMoves(position, friendlyPieces, enemyPieces);
    }
}

export default Rook;