export default class storage {

  static Storage: any = window.sessionStorage ? window.sessionStorage : window.localStorage;

  constructor() {}

  static _getItem(key) {
    console.log(key);
    return this.Storage.getItem(key);
  }
  static _setItem(key, value) {
    if (this._getItem(key) == undefined || this._getItem(key) == null || this._getItem(key) == '') {
      this.Storage.setItem(key, value);
    }
  }
  static _removeItem (key) {
    this.Storage.removeItem(key);
  }
  static _clear() {
    this.Storage.clear();
  }

}
