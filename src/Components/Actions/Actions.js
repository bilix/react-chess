import React from 'react';
import ResetBoard from './ResetBoard';
import { ActionsContainer } from './Actions.styles';

const Actions = () => (
    <ActionsContainer>
        <ResetBoard />
    </ActionsContainer>
);

export default React.memo(Actions);