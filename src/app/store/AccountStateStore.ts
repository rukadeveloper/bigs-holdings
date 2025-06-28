import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";

class AccountStateStore {
  _isAuth: boolean = false;
  _refreshToken: string = "";
  _accessToken: string = "";
  _userEmail: string = "";
  _password: string = "";

  get isAuth(): boolean {
    return this._isAuth;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get userEmail(): string {
    return this._userEmail;
  }

  get password(): string {
    return this._password;
  }

  constructor() {
    makeObservable(this, {
      _isAuth: observable,
      _refreshToken: observable,
      _accessToken: observable,
      _userEmail: observable,
      _password: observable,
      isAuth: computed,
      refreshToken: computed,
      accessToken: computed,
      userEmail: computed,
      password: computed,
      changeIsAuth: action,
      changeRefreshToken: action,
      changeAccessToken: action,
      changeUserEmail: action,
      changePassword: action,
      logout: action,
      reset: action,
    });
  }

  changeIsAuth: (isAuth: boolean) => void = (isAuth: boolean) => {
    this._isAuth = isAuth;
  };
  changeRefreshToken: (token: string) => void = (token: string) => {
    this._refreshToken = token;
  };
  changeAccessToken: (token: string) => void = (token: string) => {
    this._accessToken = token;
  };
  changeUserEmail: (email: string) => void = (email: string) => {
    this._userEmail = email;
  };
  changePassword: (pw: string) => void = (pw: string) => {
    this._password = pw;
  };

  logout: () => void = () => {
    sessionStorage.removeItem("my-account");

    this.reset();
  };

  reset: () => void = () => {
    this._isAuth = false;
    this._accessToken = "";
    this._refreshToken = "";
    this._userEmail = "";
  };
}

export default new AccountStateStore();
