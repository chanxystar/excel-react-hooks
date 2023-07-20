/**
 * @description: 全局类型声明
 */

export declare const excelHooks: {
  useReader: (
    colKeys: string[],
    success: () => void,
    error?: () => void
  ) => {
    reader: FileReader;
    data: {
      [key: string]: string;
    }[];
  };
};
