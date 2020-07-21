export class ArrayHelper {
  static isValidateArray = (array: number[] | string[]): boolean => {
    return Array.isArray(array) && array.length > 0;
  };
}

export default ArrayHelper;
