import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _code = 1;

  get code() {
    return this._code;
  }
  set code(val: number) {
    this._code = val;
    localStorage.setItem('code', val.toString());
  }

  constructor() {
    const tmp = Number(localStorage.getItem('code'));
    if (!isNaN(tmp)) {
      this._code = tmp;
    }
  }
}
