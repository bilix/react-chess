import { isRightColumn, isLeftColumn } from "./BoardGenerator";

export const Directions = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    UP_LEFT: 'UP_LEFT',
    UP_RIGHT: 'UP_RIGHT',
    DOWN_LEFT: 'DOWN_LEFT',
    DOWN_RIGHT: 'DOWN_RIGHT',
}

export const upN = (position, n) => position - 8*n;
export const downN = (position, n) => position + 8*n;
export const leftN = (position, n) => position - n;
export const rightN = (position, n) => position + n;
export const upRightN = (position, n) => position - n*7;
export const upLeftN = (position, n) => position - n*9;
export const downLeftN = (position, n) => position + n*7;
export const downRightN = (position, n) => position + n*9;

export const getMoveByDirection = direction => {
    switch (direction) {
        case Directions.UP:
            return upN;
        case Directions.DOWN:
            return downN;
        case Directions.LEFT:
            return leftN;
        case Directions.RIGHT:
            return rightN;
        case Directions.UP_LEFT:
            return upLeftN;
        case Directions.UP_RIGHT:
            return upRightN;
        case Directions.DOWN_LEFT:
            return downLeftN;
        case Directions.DOWN_RIGHT:
            return downRightN;
        default:
            return undefined;
    }
}

export const notValidMoveByDirection = (move, direction) => {
    switch (direction) {
        case Directions.UP:
            return move <= 0;
        case Directions.DOWN:
            return move > 64;
        case Directions.LEFT:
            return isRightColumn(move);
        case Directions.RIGHT:
            return isLeftColumn(move);
        case Directions.UP_LEFT:
            return move <= 0 || isRightColumn(move);
        case Directions.UP_RIGHT:
            return move <= 0 || isLeftColumn(move);
        case Directions.DOWN_LEFT:
            return move > 64 || isRightColumn(move);
        case Directions.DOWN_RIGHT:
            return move > 64 || isLeftColumn(move);
        default:
            return true;
    }
}
