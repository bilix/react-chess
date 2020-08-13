import React from 'react';
import { GameBoard, Border } from './Board.styles';
import Square from './Square';
import { initializeBoard } from './BoardGenerator';
import PieceComponent from './Pieces/PieceComponent';

const Board = () => {
    var board = initializeBoard();
    let horizontalBorder = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
    let verticalBorder = [8,7,6,5,4,3,2,1];
    return (
        <GameBoard>
            {horizontalBorder.map((elem, index) => <Border key={`border_top_${index}`} top={!!elem}>{elem}</Border>)}
            {board.map(square => {
                let row = Math.ceil(square.id/8);
                const showStart = square.id === 1 || (square.id > 8 && square.id % 8 === 1);
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
            })}
            {horizontalBorder.map((elem, index) => <Border key={`border_bottom_${index}`} bottom={!!elem}>{elem}</Border>)}
        </GameBoard>
    )
};

export default Board;