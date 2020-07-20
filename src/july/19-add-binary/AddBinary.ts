// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3395/
// This solution has way too many logics. I shall try writing a java version and see if I can get some simpler idea

const addDigits = (a: string[], b: string[]): string => {
  let result: string[] = new Array<string>(Math.max(a.length, b.length) + 1);
  let shouldCarry = false;
  let index = result.length - 1;
  while (a.length && b.length) {
    const aDigit = a.pop();
    const bDigit = b.pop();
    let digit: string;
    if (aDigit === '1' && bDigit === '1') {
      digit = shouldCarry ? '1' : '0';
      shouldCarry = true;
    } else if (aDigit === '0' && bDigit === '0') {
      digit = shouldCarry ? '1' : '0';
      shouldCarry = false;
    } else if (shouldCarry) {
      digit = '0';
      shouldCarry = true;
    } else {
      digit = '1';
      shouldCarry = false;
    }
    if (digit) {
      result[index] = digit;
      index -= 1;
    }
  }
  while (a.length) {
    let digit = a.pop();
    if (shouldCarry && digit === '1') {
      digit = '0';
      shouldCarry = true;
    } else if (shouldCarry && digit === '0') {
      digit = '1';
      shouldCarry = false;
    } else {
      shouldCarry = false;
    }
    if (digit) {
      result[index] = digit;
      index -= 1;
    }
  }
  while (b.length) {
    let digit = b.pop();
    if (shouldCarry && digit === '1') {
      digit = '0';
      shouldCarry = true;
    } else if (shouldCarry && digit === '0') {
      digit = '1';
      shouldCarry = false;
    } else {
      shouldCarry = false;
    }
    if (digit) {
      result[index] = digit;
      index -= 1;
    }
  }
  result[0] = shouldCarry ? '1' : '0';
  result = result[0] === '0' ? result.splice(1) : result;
  return result.join('');
};

const addBinary = (a: string, b: string): string => {
  if (
    a === null ||
    a === undefined ||
    b === null ||
    b === undefined ||
    a.length < 1 ||
    b.length > 10 ** 4
  ) {
    return undefined;
  }
  const aArray = Array.from(a);
  const bArray = Array.from(b);
  return addDigits(aArray, bArray);
};

export default addBinary;
