import { format, addSeconds } from 'date-fns';

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

  static formatSeconds(seconds: number): string {
    const base = new Date(1980, 0, 1, 0, 0, 0);
    const time = addSeconds(base, seconds);
    return format(time, 'HH:mm:ss');
  }
}

export default CommonUtils;
export { CommonUtils };
