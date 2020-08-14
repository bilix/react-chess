import React from 'react';
import { GameBoard, Border } from './Board.styles';
import Square from './Square';
import { generateBoard, verticalBorder, horizontalBorder } from './BoardGenerator';
import PieceComponent from './PieceComponent';
import {useSelector} from 'react-redux';

const renderSquare = (square) => {
    const row = Math.ceil(square.id/8);
    const showStart = square.id % 8 === 1;
    const showEnd = square.id % 8 === 0;
    return (
        <>
            {showStart && <Border key={`border_left_${verticalBorder[row-1]}`} left>{verticalBorder[row-1]}</Border>}
            <Square id={square.id}>
                {square.piece && 
                    <PieceComponent position={square.id} piece={square.piece} />
                }
            </Square>
            {showEnd && <Border key={`border_right_${verticalBorder[row-1]}`} right>{verticalBorder[row-1]}</Border>}
        </>
    )
}

const Board = () => {
    const board = useSelector(state => state.board.board);
    const boardList = generateBoard(board);
    
    return (
        <GameBoard>
            {horizontalBorder.map((elem, index) => <Border key={`border_top_${index}`} top={!!elem}>{elem}</Border>)}
            {boardList.map(square => renderSquare(square))}
            {horizontalBorder.map((elem, index) => <Border key={`border_bottom_${index}`} bottom={!!elem}>{elem}</Border>)}
        </GameBoard>
    )
};

export default Board;