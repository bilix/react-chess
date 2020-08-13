import React from 'react';
import { StyledPiece } from '../Board.styles';
import { selectSquare, setMoves } from '../../Store/Reducers/Board/BoardReducer';
import { connect } from 'react-redux';
import { currentPlayerSelector, player1PiecesSelector, player2PiecesSelector } from '../../Store/Reducers/Players/PlayersReducer';

class PieceComponent extends React.Component{
    constructor(props) {
        super(props);
        this.piece = this.props.piece;
        this.position = this.props.position;
        this.player = this.piece.color === 'w' ? 1 : 2;
        this.state = {
            moved: false,
            friendlyPieces: this.player === 1 ? this.props.player1Pieces : this.props.player2Pieces,
            enemyPieces: this.player === 2 ? this.props.player2Pieces : this.props.player1Pieces,
        }
    }

    isCurrentPlayer = () => {
        const {piece, currentPlayer} = this.props;
        return (piece.color === 'w' && currentPlayer === 1) || (piece.color === 'b' && currentPlayer === 2);
    }

    handleClick = () => {
        if (!this.isCurrentPlayer()) return null;
        const {setSelectedSquare, setPossibleMoves} = this.props;
        const {friendlyPieces, enemyPieces} = this.state;
        const {moved} = this.state;
        setSelectedSquare(this.position);
        const movements = this.piece.calculatePossibleMoves(this.position, enemyPieces, friendlyPieces, moved);
        setPossibleMoves(movements);
    }

    render () {
        const {piece} = this.props;
        return (
            <StyledPiece currentPlayer={this.isCurrentPlayer()} onClick={this.handleClick}>
                {piece.icon}
            </StyledPiece>
        )
    }
};

const mapStateToProps = (state) => {
    const currentPlayer = currentPlayerSelector(state);
    const player1Pieces = player1PiecesSelector(state);
    const player2Pieces = player2PiecesSelector(state);
    return {
        currentPlayer,
        player1Pieces,
        player2Pieces,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedSquare: (position) => dispatch(selectSquare(position)),
        setPossibleMoves: (moves) => dispatch(setMoves(moves)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PieceComponent);