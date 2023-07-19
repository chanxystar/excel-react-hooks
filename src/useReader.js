import { useState } from "react";

/**
 *  @description 读取excel文件hook
 *  @param {number} colCount excel文件的列数
 *  @param {function} success 读取成功的回调
 *  @param {function} error 读取失败的回调
 *  @returns  {object} reader:FileReader对象，data:读取的数据
 * */
export default function useReader(colCount, success, error) {
  const reader = new FileReader();
  const [data, setData] = useState([]);

  //处理数据
  const handleData = (result) => {
    //进行数据格式校验
    if (result[0].length !== colCount) {
      message.error(`文件的列数不正确，应该是${colCount}列`);
      error();
      return;
    }
    //去掉表头
    result.shift();
    //储存数据
    setData(result);
    success();
  };
  //挂载回调
  reader.onload = function (e) {
    {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const result = XLSX.utils
        .sheet_to_json(worksheet, { header: 1 })
        .map((row) => row.map((col) => col.toString()));
      handleData(result);
    }
  };
  return { reader, data };
}
