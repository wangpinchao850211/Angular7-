import { environment } from 'src/environments/environment';

export function cleanArray(actual) {
    const newArray = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i]);
        }
    }
    return newArray;
}

export const param = (json: any) => {
    if (!json) { return ''; }
    return cleanArray(Object.keys(json).map(key => {
        if (json[key] === undefined) { return ''; }
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
    })).join('&');
};

/**
 * 返回数据类型的字符串
 * @param obj 入参
 * @returns string
 */
export const checkType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1);
/**
 * remove Object null, undefined, '', deepCopy
 * @params obj 入参
 */
export const removeObjectEmptyValue = (obj: any): object => {
    const params = {};
    if (obj === null || obj === undefined || obj === '') {
        return params;
    }
    for (const key in obj) {
        if (checkType(obj[key]) === 'Object') {
            params[key] = removeObjectEmptyValue(obj[key]);
        } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
            params[key] = obj[key];
        }
    }
    return params;
};
/**
 * remove Object null, undefined, but not includes Array
 * @params obj 入参
 */
export const removeObjectEmpty = (obj: any): object => {
    const params = {};
    if (obj === null || obj === undefined || obj === '') {
        return params;
    }
    if (checkType(obj) === 'Array') { // 数组没处理
        return;
    }
    for (const key in obj) {
        if (checkType(obj[key]) === 'Object') {
            params[key] = removeObjectEmpty(obj[key]);
        } else if (obj[key] !== null && obj[key] !== undefined) {
            params[key] = obj[key];
        }
    }
    return params;
};

/**
 * remove array null，undefined，‘’
 * @param arr 入参
 */
export const removeArrayEmpty = (arr: Array<any>): Array<any> => {
    const array = [];
    arr.forEach((item, index) => {
        if (checkType(item) === 'Array') {
            array[index] = removeArrayEmpty(item);
        } else if (checkType(item) === 'Object') {
            array[index] = removeObjectEmpty(item);
        } else if (item !== null && item !== undefined && item !== '') {
            array[index] = item;
        }
    });
    return array;
};

/**
 * remove params null，undefined，‘’
 * @param realParam 入参
 */
export function removeToEmpty(realParam: any): any {
    let param = null;
    if (checkType(realParam) === 'Array') {
        param = removeArrayEmpty(realParam);
    } else if (checkType(realParam) === 'Object') {
        param = removeObjectEmpty(realParam);
    } else if (realParam !== null && realParam !== undefined && realParam !== '') {
        param = realParam;
    }
    return param;
}

/**
 * Remove duplicate items in two dimensional array; 删除二维数组中的重复项
 * @param arr two dimensional array
 * @returns De duplicated array
 */
export const removeRepeatTwoDimensionalArray = (arr: Array<Array<number>>): Array<Array<number>> => {
    const obj = {};
    arr.forEach(item => !obj[item.toString()] && (obj[item.toString()] = item));
    return Object.values(obj);
};

/**
 * measure the text width
 * font (eg: normal 16px graphik)
 */
export function measureTextWidth(str: string, font: string) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext('2d');
    font && (context.font = font);
    const metrics = context.measureText(str);
    return metrics.width;
}
