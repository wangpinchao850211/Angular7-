// 去抖函数原理
export function debounce(fn, wait) {
    console.log('debounce');
    let timeout = null;

    // tslint:disable-next-line:only-arrow-functions
    return function() {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, wait);
        console.log('timeout', timeout);
    };
}
// 见Hbuilder里有xm debounce原理