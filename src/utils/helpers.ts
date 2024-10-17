// src/utils/helpers.ts

/**
 * 格式化日期
 * @param date - Date 对象或时间戳
 * @param format - 日期格式，默认为 'YYYY-MM-DD'
 * @returns 格式化后的日期字符串
 */
export const formatDate = (date: Date | number, format: string = 'YYYY-MM-DD'): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
  
    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day);
  };
  
  /**
   * 深拷贝对象
   * @param obj - 要拷贝的对象
   * @returns 深拷贝后的新对象
   */
  export const deepClone = <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (obj instanceof Date) {
      return new Date(obj.getTime()) as any;
    }
  
    if (obj instanceof Array) {
      return obj.reduce((arr, item, i) => {
        arr[i] = deepClone(item);
        return arr;
      }, [] as any[]) as any;
    }
  
    if (obj instanceof Object) {
      return Object.keys(obj).reduce((newObj, key) => {
        newObj[key as keyof typeof newObj] = deepClone((obj as any)[key]);
        return newObj;
      }, {} as T);
    }
  
    throw new Error(`Unable to copy obj! Its type isn't supported.`);
  };
  
  /**
   * 防抖函数
   * @param func - 要执行的函数
   * @param wait - 等待时间（毫秒）
   * @returns 防抖处理后的函数
   */
  export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
    let timeout: NodeJS.Timeout | null = null;
  
    const debouncedFunc = (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  
    debouncedFunc.cancel = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
  
    return debouncedFunc;
  };