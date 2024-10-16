export type DeepEqualValue =
  | string
  | number
  | boolean
  | Date
  | DeepEqualObject
  | DeepEqualArray;
export interface DeepEqualObject {
  [key: string]: DeepEqualValue;
}
export interface DeepEqualArray extends Array<string> {}

export const deepEqual = (
  obj1: DeepEqualObject | null | undefined,
  obj2: DeepEqualObject | null | undefined
): boolean => {
  if (obj1 === obj2) return true;

  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  if (!keys1.every((key) => keys2.includes(key))) return false;

  const isEqual = (val1: DeepEqualValue, val2: DeepEqualValue): boolean => {
    if (val1 === val2) return true;
    if (typeof val1 !== typeof val2) return false;

    if (Array.isArray(val1) && Array.isArray(val2)) {
      return (
        val1.length === val2.length && val1.every((el, i) => el === val2[i])
      );
    }

    if (val1 instanceof Date && val2 instanceof Date) {
      return val1.getTime() === val2.getTime();
    }

    if (typeof val1 === "object" && val1 !== null && val2 !== null) {
      const nestedKeys1 = Object.keys(val1);
      const nestedKeys2 = Object.keys(val2);

      if (nestedKeys1.length !== nestedKeys2.length) return false;

      return nestedKeys1.every((key) =>
        isEqual((val1 as DeepEqualObject)[key], (val2 as DeepEqualObject)[key])
      );
    }

    return false;
  };

  return keys1.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(obj1, key) &&
      Object.prototype.hasOwnProperty.call(obj2, key) &&
      isEqual(obj1[key], obj2[key])
  );
};
