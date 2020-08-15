import { isRightColumn, isLeftColumn } from "./BoardGenerator";

export const upN = (position, n) => position - 8*n;
export const downN = (position, n) => position + 8*n;
export const leftN = (position, n) => position - n;
export const rightN = (position, n) => position + n;
export const upRightN = (position, n) => position - n*7;
export const upLeftN = (position, n) => position - n*9;
export const downLeftN = (position, n) => position + n*7;
export const downRightN = (position, n) => position + n*9;

export const addDiagonalUpLeftMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const upLeftMove = upLeftN(initialPosition, distance);
    if (upLeftMove <= 0 || isRightColumn(upLeftMove) || isFriendly(upLeftMove)) return;
    else {
        moves.push(upLeftMove);
        if (!isEnemy(upLeftMove)) {
            addDiagonalUpLeftMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addDiagonalUpRightMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const upRightMove = upRightN(initialPosition, distance);
    if (upRightMove <= 0 || isLeftColumn(upRightMove) || isFriendly(upRightMove)) return;
    else {
        moves.push(upRightMove);
        if (!isEnemy(upRightMove)) {
            addDiagonalUpRightMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addDiagonalDownRightMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const downRightMove = downRightN(initialPosition, distance);
    if (downRightMove > 64 || isLeftColumn(downRightMove) || isFriendly(downRightMove)) return;
    else {
        moves.push(downRightMove);
        if (!isEnemy(downRightMove)) {
            addDiagonalDownRightMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addDiagonalDownLeftMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const downLeftMove = downLeftN(initialPosition, distance);
    if (downLeftMove > 64 || isRightColumn(downLeftMove) || isFriendly(downLeftMove)) return;
    else {
        moves.push(downLeftMove);
        if (!isEnemy(downLeftMove)) {
            addDiagonalDownLeftMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addUpMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const upMove = upN(initialPosition, distance);
    if (upMove <= 0 || isFriendly(upMove)) return;
    else {
        moves.push(upMove);
        if (!isEnemy(upMove)) {
            addUpMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addDownMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const downMove = downN(initialPosition, distance);
    if (downMove > 64 || isFriendly(downMove)) return;
    else {
        moves.push(downMove);
        if (!isEnemy(downMove)) {
            addDownMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addLeftMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const leftMove = leftN(initialPosition, distance);
    if (isRightColumn(leftMove) || isFriendly(leftMove)) return;
    else {
        moves.push(leftMove);
        if (!isEnemy(leftMove)) {
            addLeftMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}

export const addRightMoves = (initialPosition, distance, moves, isFriendly, isEnemy) => {
    const rightMove = rightN(initialPosition, distance);
    if (isLeftColumn(rightMove) || isFriendly(rightMove)) return;
    else {
        moves.push(rightMove);
        if (!isEnemy(rightMove)) {
            addRightMoves(initialPosition, distance + 1, moves, isFriendly, isEnemy);
        }
    }
}