import { addBinary } from '../../../src/public_apis';

describe('Add Binary Tests', () => {
  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not add the numbers when the input numbers are invalid', () => {
    expect(addBinary('', '0')).toEqual('');
  });

  it('should add two numbers that do not have an end carryover', () => {
    expect(addBinary('10', '1')).toEqual('11');
    expect(addBinary('1', '10')).toEqual('11');
  });

  it('should add two numbers that have an end carryover', () => {
    expect(addBinary('11', '1')).toEqual('100');
    expect(addBinary('1', '11')).toEqual('100');
    expect(addBinary('1001', '1')).toEqual('1010');
    expect(addBinary('1', '1001')).toEqual('1010');
    expect(addBinary('1011', '1')).toEqual('1100');
    expect(addBinary('1', '1011')).toEqual('1100');
  });

  it('should add two numbers that have carry overs in between', () => {
    expect(addBinary('10011010', '1010110')).toEqual('11110000');
  });
});
