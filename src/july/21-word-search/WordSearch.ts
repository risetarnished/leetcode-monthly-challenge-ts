// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3397/
import { ArrayHelper } from '../../common';

const isInBound = (
  rowBound: number,
  colBound: number,
  row: number,
  col: number
): boolean => {
  return row >= 0 && row < rowBound && col >= 0 && col < colBound;
};

const canConstructWord = (
  board: string[][],
  word: string,
  row: number,
  col: number,
  index: number,
  visited: Map<string, boolean>
): boolean => {
  // Base case: when all characters have been matched
  if (index === word.length) {
    return true;
  }
  // Representing 4 adjacent directions
  const dirs: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const cell: string = [row, col].join(',');
  visited.set(cell, true);
  let result = false;
  dirs.forEach((dir) => {
    const nextRow = row + dir[0];
    const nextCol = col + dir[1];
    const nextCell = [nextRow, nextCol].join(',');
    if (
      isInBound(board.length, board[0].length, nextRow, nextCol) &&
      !visited.has(nextCell) &&
      board[nextRow][nextCol] === word.charAt(index) &&
      canConstructWord(board, word, nextRow, nextCol, index + 1, visited)
    ) {
      result = true;
    }
  });
  visited.set(cell, result);
  return result;
};

export const exist = (board: string[][], word: string): boolean => {
  if (!ArrayHelper.isValidMatrix(board)) {
    return false;
  }
  if (word.length === 0) {
    return true;
  }
  const row = board.length;
  const col = board[0].length;
  const visited = new Map<string, boolean>();
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (
        board[i][j] === word.charAt(0) &&
        canConstructWord(board, word, i, j, 1, visited)
      ) {
        return true;
      }
    }
  }
  return false;
};

export default exist;
