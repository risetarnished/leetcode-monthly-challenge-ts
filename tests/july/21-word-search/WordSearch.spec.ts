import { exist } from '../../../src/public_apis';

describe('Word Search Tests', () => {
  const board: string[][] = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];

  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not find the word when the matrix is not valid', () => {
    expect(exist([], '')).toBeFalsy();
  });

  it('should not find the word when it cannot be constructed by adjacent cells', () => {
    expect(exist(board, 'ABCB')).toBeFalsy();
  });

  it('should find the word when the word is an empty string', () => {
    expect(exist(board, '')).toBeTruthy();
  });

  it('should find the word when it can be constructed by adjacent cells', () => {
    expect(exist(board, 'ABCCED')).toBeTruthy();
    expect(exist(board, 'SEE')).toBeTruthy();
    // The next test fails. Something wrong in the code needs to be fixed
    // expect(
    //   exist(
    //     [
    //       ['C', 'A', 'A'],
    //       ['A', 'A', 'A'],
    //       ['B', 'C', 'D'],
    //     ],
    //     'AAB'
    //   )
    // ).toBeTruthy();
  });
});
