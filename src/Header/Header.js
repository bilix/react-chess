import React from 'react';
import { useSelector } from 'react-redux';
import { currentPlayerSelector } from '../Store/Reducers/Players/PlayersReducer';
import { StyledHeader } from './Header.styles';

const Header = () => {
    const currentPlayer = useSelector(state => currentPlayerSelector(state));
    const playerName = currentPlayer === 1 ? 'White' : 'Black';
    
    return (
        <StyledHeader>
            {`Current player: ${playerName}`}
        </StyledHeader>
    )
}

export default Header;