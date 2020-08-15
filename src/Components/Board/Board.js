import React from 'react';
import { GameBoard, Border } from './Board.styles';
import Square from './Square';
import { generateBoard, verticalBorder, isLeftColumn, isRightColumn } from '../../Game/BoardGenerator';
import PieceComponent from './PieceComponent';
import {useSelector} from 'react-redux';
import { boardSelector } from '../../Store/Reducers/Board/BoardReducer';
import { TopBorder, BottomBorder} from './HorizontalBorder';

const renderSquare = (square) => {
    const row = Math.ceil(square.id/8);
    const showStart = isLeftColumn(square.id);
    const showEnd = isRightColumn(square.id);
    return (
        <React.Fragment key={`square_container_${square.id}`}>
            {showStart && <Border key={`border_left_${verticalBorder[row-1]}`} left>{verticalBorder[row-1]}</Border>}
            <Square squareNumber={square.id}>
                {square.piece && 
                    <PieceComponent position={square.id} piece={square.piece} />
                }
            </Square>
            {showEnd && <Border key={`border_right_${verticalBorder[row-1]}`} right>{verticalBorder[row-1]}</Border>}
        </React.Fragment>
    )
}

const Board = () => {
    const board = useSelector(state => boardSelector(state));
    const boardList = generateBoard(board.board);
    
    return (
        <GameBoard>
            <TopBorder />
            {boardList.map(square => renderSquare(square))}
            <BottomBorder />
        </GameBoard>
    )
};

export default Board;