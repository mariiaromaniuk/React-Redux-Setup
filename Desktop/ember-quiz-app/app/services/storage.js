import Service from "@ember/service";

/**
 * StorageService
 */
export default class StorageService extends Service {
  /**
   * Set item
   * @param {[type]} key  [description]
   * @param {[type]} data [description]
   */
  setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  /**
   * Get item
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  /**
   * Clear item
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  clearItem(key) {
    localStorage.removeItem(key);
  }
  /**
   * [has description]
   * @param  {[type]}  key [description]
   * @return {Boolean}     [description]
   */
  has(key) {
    return localStorage.hasOwnProperty(key);
  }
  /**
   * [clearAll description]
   * @return {[type]} [description]
   */
  clearAll() {
    localStorage.clear();
  }
  /**
   * [getAllItemKeys description]
   * @return {[type]} [description]
   */
  getAllItemKeys() {
    return Object.keys(localStorage);
  }
}
