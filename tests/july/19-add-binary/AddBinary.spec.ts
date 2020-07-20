import addBinary from '../../../src/july/19-add-binary/AddBinary';

describe('Add Binary Tests', () => {
  it('should not add the numbers when the input numbers are invalid', () => {
    expect(addBinary('', '0')).toEqual('');
  });

  it('should add two numbers that do not have an end carryover', () => {
    expect(addBinary('10', '1')).toEqual('11');
  });

  it('should add two numbers that have an end carryover', () => {
    expect(addBinary('11', '1')).toEqual('100');
  });
});
