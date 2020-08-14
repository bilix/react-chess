class Piece {
    constructor(props) {
        this.color = props.color;
    }

    calculatePossibleMoves = () => [];

    calculateDiagonalMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        //up-left
        const isFriendly = square => friendlyPieces.includes(square);
        const isEnemy = square => enemyPieces.includes(square);
        for (let i = position - 9; i > 0 && i % 8 !== 0; i -= 9) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        //up-right
        for (let i = position - 7; i > 0 && i % 8 !== 1; i -= 7) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        //down-left
        for (let i = position + 7; i < 64 && i % 8 !== 0; i += 7) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        //down-right
        for (let i = position + 9; i < 64 && i % 8 !== 1; i += 9) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        return moves;
    }

    calculateVerticalHorizontalMoves = (position, friendlyPieces, enemyPieces) => {
        let moves = [];
        //up
        const isFriendly = square => friendlyPieces.includes(square);
        const isEnemy = square => enemyPieces.includes(square);
        for (let i = position - 8; i > 0; i -= 8) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        //down
        for (let i = position + 8; i < 64; i += 8) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        //left
        for (let i = position - 1; i % 8 !== 0; i -= 1) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        //right
        for (let i = position + 1; i % 8 !== 1; i += 1) {
            if (isFriendly(i)) break;
            if (isEnemy(i)) {
                moves.push(i);
                break;
            }
            moves.push(i);
        }
        return moves;
    }

    addIfNotFriendly = (position, friendlyPieces, moves) => {
        if(!friendlyPieces.includes(position)) moves.push(position);
    }
}

export default Piece;