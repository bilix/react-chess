import Piece from './Piece';

class Queen extends Piece {
    constructor(props) {
        super(props);
        this.icon = props.color === 'w' ? '♕' : '♛';
        this.name = `${this.color}q`;
    }

    calculatePossibleMoves = (position, friendlyPieces, enemyPieces) => {
        const verticalHorizontal = this.calculateVerticalHorizontalMoves(position, friendlyPieces, enemyPieces);
        const diagonal = this.calculateDiagonalMoves(position, friendlyPieces, enemyPieces);
        return verticalHorizontal.concat(diagonal);
    }

}

export default Queen;