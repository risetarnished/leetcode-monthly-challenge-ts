import { singleNumber } from '../../../src/public_apis';

describe('Single Number III Tests', () => {
  afterEach(() => {
    expect.hasAssertions();
  });

  it('shouldNotFindNumbersThatAppearsOnlyOnceWhenTheArrayIsEmpty', () => {
    expect(singleNumber([])).toEqual([]);
  });

  it('shouldFindTheNumbersThatAppearsOnlyOnce', () => {
    expect(singleNumber([1, 2, 1, 3, 2, 5])).toStrictEqual([3, 5]);
    expect(singleNumber([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(singleNumber([1, 1, 2, 2])).toStrictEqual([]);
  });
});
