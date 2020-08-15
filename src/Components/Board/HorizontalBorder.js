import React from 'react';
import { horizontalBorder } from '../../Game/BoardGenerator';
import { Border } from './Board.styles';

export const TopBorder = () => {
    return (
        horizontalBorder.map((elem, index) => (
            <Border key={`border_top_${index}`} top={!!elem}>{elem}</Border>)
        )
    )
    
};

export const BottomBorder = () => {
    return (
        horizontalBorder.map((elem, index) => (
            <Border key={`border_bottom_${index}`} bottom={!!elem}>{elem}</Border>)
        )
    )
};