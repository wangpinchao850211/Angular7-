import { MenuToTabMapping } from '../interface/menu';
/**
 * 通过url获取TabName
 * @params url 入参
 */
export function getNameByUrl(url: string) {
    let tabName = '';
    for (const key in MenuToTabMapping) {
      if (MenuToTabMapping[key] === url) {
        tabName = key;
        break;
      }
    }
    return tabName;
}
/**
 * 通过TabName获取url
 * @params name 入参
 */
export function getUrlByName(name: string) {
    let tabUrl = '';
    for (const key in MenuToTabMapping) {
      if (key === name) {
        tabUrl = MenuToTabMapping[key];
        break;
      }
    }
    return tabUrl;
}