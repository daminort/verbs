class StorageUtils {

  static read<T>(key: string, defaultValue: T): T {
    const rawValue = localStorage.getItem(key) || '';
    try {
      const resValue: T = JSON.parse(rawValue);
      return resValue;
    } catch (e) {
      return defaultValue;
    }
  }

  static write<T>(key: string, value: T): void {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }

  static clear(key: string): void {
    localStorage.removeItem(key);
  }
};

export default StorageUtils;
export { StorageUtils };
