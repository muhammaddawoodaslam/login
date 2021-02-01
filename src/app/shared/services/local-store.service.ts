import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private ls = window.localStorage;
  constructor() { }

  public setItem(key, value) {
    value = JSON.stringify(value);
    this.ls.setItem(key, value);
    return true;
  }

  getItem(key) {
    const value = this.ls.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      // console.log(e)
      return false;
    }
  }
  public clear() {
    this.ls.clear();
  }

  public setUser(res) {
    this.setItem('token', res.token);
    this.setItem('logged', true);
  }

}
