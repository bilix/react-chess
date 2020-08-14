import React from 'react';
import { useDispatch } from 'react-redux';
import { resetBoard } from '../../Store/Reducers/Board/BoardReducer';
import { Button } from './Actions.styles';

const ResetBoard = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(resetBoard());
    }
    return (
        <Button onClick={() => handleClick()}>
            Reset Board
        </Button>
    )
}

export default React.memo(ResetBoard);