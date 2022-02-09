// import Vue from 'vue';
import _ from 'lodash';
 
export function DrawTable(data, rootKey, tableTitle) {
  const tableDataKeys = []; // 合并行分组标识
  const {rowObj, colArr, rowTypeArr, rowArr, A} = handleTabelInfo(data, tableDataKeys);
  const { str, TableTit, c } = drawTable(rowObj, colArr, rowTypeArr, rowArr, A, tableDataKeys);
  let tableStr = `<table border="1px" id="${rootKey}" contenteditable="false" style="cursor:pointer"><tbody><tr class="firstRow"><th colspan="${c.length + 2}">${tableTitle}</th></tr><tr><td width="100" valign="top">行分组分类</td><td width="100" valign="top">行分组</td>${TableTit}</tr>${str}</tbody></table>`;
  console.log(tableStr); // 最终生成的字符串
  return tableStr;
}

function handleTabelInfo(data, tableDataKeys) { // 处理表格数据
  const resData = { ...data };
  if (JSON.stringify(resData) !== '{}') {
    const rowType = Object.keys(resData);
    tableDataKeys.push(...rowType); // 存一下，在下面表格绘制有使用
    const colArr = Object.keys(resData[rowType[0]]); // 数据列数组
    const A = []; // 存储数据二维数组
    for (const k in resData) {
      if (resData[k] !== undefined) {
        let rowkey = k.split('?')[1];
        const arr = [];
        colArr.forEach((s) => {
          arr.push(resData[k][s]);
        });
        const O = {}; // 为二维数组添加上key标识
        if (rowkey === '空') {
          const i = rowType.findIndex(ite => ite === k);
          rowkey = `空${i}`;
        }
        console.log(rowkey);
        O[`${rowkey}`] = arr;
        // Vue.set(O, rowkey, arr);
        A.push(O);
      }
    }
    // console.log(A); // [...{东北: ['1']}]
    let rowTypeArr = []; // 行分组存在几种类型
    const rowArrToObj = [];
    rowType.forEach((i) => {
      rowTypeArr.push(i.split('?')[0]);
      rowArrToObj.push(_.fromPairs([i.split('?')]));
    });
    rowTypeArr = Array.from(new Set(rowTypeArr)); // 去重最外层行分组
    const rowObj = {}; // 行分组整体对象
    const rowArr = []; // 行分类二维数组
    rowTypeArr.forEach((i) => {
      const key = i;
      const a = _.countBy(rowArrToObj, (x) => {
        if (Object.keys(x)[0] === key) {
          return x[key];
        }
        return Object.keys(x)[0];
      });
      rowArr.push(a);
      Object.assign(rowObj, a);
    });
    /**
   * rowObj: 行分组包含所有行名称对象
   * colArr: 数据列名数组
   * rowTypeArr: 行分组存在几种大类
   * rowArr：行分类二维数组
   * A: 存储数据二维数组
   */
    // console.log(rowObj);
    // console.log(colArr);
    // console.log(rowTypeArr);
    // console.log(rowArr);
    // console.log(A);
    // console.log(key);
    return { rowObj, colArr, rowTypeArr, rowArr, A }
  }
}
function drawTable(r, c, wrapArr, rArr, A, tableDataKeys) {
  const E = A;
  let TableTit = '';
  c.forEach((i) => {
    TableTit += `<td width="120" valign="top">${i}</td>`;
  });
  // 循环添加左侧大分类
  const b = {};
  for (const key in r) {
    if (wrapArr.includes(key)) {
      b[`${key}`] = r[key];
      // Vue.set(b, `${key}`, r[key]);
    } else if (wrapArr.length === 1) { // 兼容单行单列
      b[`${wrapArr[0]}`] = Object.keys(r).length;
      // Vue.set(b, `${wrapArr[0]}`, Object.keys(r).length);
    }
  }
  for (const key in r) {
    if (wrapArr.includes(key)) {
      b[key] = `<td rowspan="${b[key]}">${key}</td>`;
    } else if (wrapArr.length === 1) { // 兼容单行单列
      b[wrapArr[0]] = `<td rowspan="${Object.keys(r).length}">${wrapArr[0]}</td>`;
    }
  }
  // 通过rArr遍历
  const x = [];
  let TableRow = '';
  let TableRowArr = [];
  // console.log(E);
  rArr.forEach((o) => {
    TableRowArr = [];
    for (const key in o) {
      if (!wrapArr.includes(key)) {
        TableRow = '';
        TableRow += `<tr><td width="100" valign="top">${key}</td></tr>`;
        for (let i = 0; i < E.length; i++) {
          if (key === Object.keys(E[i])[0]) {
            for (let j = 0; j < E[i][key].length; j++) {
              const index = TableRow.lastIndexOf('td');
              TableRow = TableRow.slice(0, index + 3) +
              `<td width="120" valign="top">${E[i][key][j]}</td>` + TableRow.slice(index + 3);
            }
          }
        }
        TableRowArr.push(TableRow); // 在这个位置将TableRow收入到数组中
      }
    }
    x.push(TableRowArr);
  });
  // console.log(rArr);
  // console.log(wrapArr);
  // console.log(x);
  // console.log(r);
  const wrapObj = {};
  wrapArr.forEach((s) => {
    Object.assign(wrapObj, _.pick(r, s)); // 将生成的对象合并
  });
  rArr.forEach((o) => {
    const newKey = [];
    for (const key in o) {
      if (!wrapArr.includes(key)) {
        newKey.push(key);
      }
    }
    // 如果行大类为一个单独处理
    if (wrapArr.length === 1) { // 兼容单行单列
      x.forEach((w) => {
        const index = w[0].indexOf('td');
        w[0] = w[0].slice(0, index - 1) + b[wrapArr[0]] + w[0].slice(index - 1);
      });
    } else {
      for (const k in wrapObj) { // 使用大分类对象进行循环添加
        if (wrapObj[k] === newKey.length) {
          let flag = false;
          for (const w of x) {
            const everytype = w[0].split('</td>')[0];
            const dex = everytype.lastIndexOf('>');
            const everyKey = everytype.slice(dex + 1);
            // 原始数据是否包括拼合之后的key，包括方可插入
            flag = tableDataKeys.includes(`${k}?${everyKey}`);
            if (w.length === wrapObj[k] && flag) {
              const index = w[0].indexOf('td');
              w[0] = w[0].slice(0, index - 1) + b[k] + w[0].slice(index - 1);
            }
          }
        }
      }
    }
  });
  let str = '';
  x.forEach((i) => {
    i.forEach((s) => {
      str += s;
    });
  });

  // 输出值
  console.log(str);
  console.log(TableTit);
  return { str, TableTit, c }
  
}
