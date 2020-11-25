class CommonUtils {

  static shuffle<T>(originArray: Array<T>): Array<T> {
    const resArray = [...originArray];
    let i, j, x;
    for (i = resArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = resArray[i];
      resArray[i] = resArray[j];
      resArray[j] = x;
    }
    return resArray;
  }
};

export default CommonUtils;
export { CommonUtils };
