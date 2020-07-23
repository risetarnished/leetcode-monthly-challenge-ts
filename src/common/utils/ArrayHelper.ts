export class ArrayHelper {
  static isValidArray = (array: number[] | string[]): boolean => {
    return Array.isArray(array) && array.length > 0;
  };

  static isValidMatrix = (array: number[][] | string[][]): boolean => {
    return (
      Array.isArray(array) &&
      array.length > 0 &&
      Array.isArray(array[0]) &&
      array[0].length >= 0
    );
  };
}

export default ArrayHelper;
