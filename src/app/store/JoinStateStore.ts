import { action, computed, makeObservable, observable } from "mobx";

class JoinStateStore {
  _isEmail1Valid: boolean = false;
  _isEmail1Touched: boolean = false;
  _email1Value: string = "";
  _isEmail2Valid: boolean = false;
  _isEmail2Touched: boolean = false;
  _email2Value: string = "";
  _isPasswordValid: boolean = false;
  _isPasswordTouched: boolean = false;
  _passwordValue: string = "";
  _isPassCheckValid: boolean = false;
  _isPassCheckTouched: boolean = false;
  _passCheckValue: string = "";
  _isNameValid: boolean = false;
  _isNameTouched: boolean = false;
  _nameValue: string = "";

  get isEmail2Valid(): boolean {
    return this._isEmail2Valid;
  }

  get isEmail2Touched(): boolean {
    return this._isEmail2Touched;
  }

  get email2Value(): string {
    return this._email2Value;
  }

  get isEmail1Valid(): boolean {
    return this._isEmail1Valid;
  }

  get email1Value(): string {
    return this._email1Value;
  }

  get isEmail1Touched(): boolean {
    return this._isEmail1Touched;
  }

  get isPasswordValid(): boolean {
    return this._isPasswordValid;
  }

  get isPasswordTouched(): boolean {
    return this._isPasswordTouched;
  }

  get passwordValue(): string {
    return this._passwordValue;
  }

  get isPassCheckValid(): boolean {
    return this._isPassCheckValid;
  }

  get isPassCheckTouched(): boolean {
    return this._isPassCheckTouched;
  }

  get passCheckValue(): string {
    return this._passCheckValue;
  }

  get isNameValid(): boolean {
    return this._isNameValid;
  }

  get isNameTouched(): boolean {
    return this._isNameTouched;
  }

  get nameValue(): string {
    return this._nameValue;
  }

  constructor() {
    makeObservable(this, {
      _isEmail1Valid: observable,
      _isEmail1Touched: observable,
      _email1Value: observable,
      _isEmail2Valid: observable,
      _isEmail2Touched: observable,
      _email2Value: observable,
      _isPasswordValid: observable,
      _isPasswordTouched: observable,
      _passwordValue: observable,
      _isPassCheckValid: observable,
      _isPassCheckTouched: observable,
      _passCheckValue: observable,
      _isNameValid: observable,
      _isNameTouched: observable,
      _nameValue: observable,
      isEmail1Valid: computed,
      isEmail1Touched: computed,
      email1Value: computed,
      isEmail2Valid: computed,
      isEmail2Touched: computed,
      email2Value: computed,
      isPasswordValid: computed,
      isPasswordTouched: computed,
      passwordValue: computed,
      isPassCheckValid: computed,
      isPassCheckTouched: computed,
      passCheckValue: computed,
      isNameValid: computed,
      isNameTouched: computed,
      nameValue: computed,
      changeEmail1Valid: action,
      changeEmail1Touched: action,
      changeEmail1Value: action,
      changeEmail2Valid: action,
      changeEmail2Touched: action,
      changeEmail2Value: action,
      changePasswordValid: action,
      changePasswordTouched: action,
      changePasswordValue: action,
      changePassCheckValid: action,
      changePassCheckTouched: action,
      changePassCheckValue: action,
      changeNameValid: action,
      changeNameTouched: action,
      changeNameValue: action,
    });
  }
  changeEmail1Valid: (valid: boolean) => void = (valid: boolean) => {
    this._isEmail1Valid = valid;
  };
  changeEmail1Touched: (touched: boolean) => void = (touched: boolean) => {
    this._isEmail1Touched = touched;
  };
  changeEmail1Value: (value: string) => void = (value: string) => {
    this._email1Value = value;
  };
  changeEmail2Valid: (valid: boolean) => void = (valid: boolean) => {
    this._isEmail2Valid = valid;
  };
  changeEmail2Touched: (touched: boolean) => void = (touched: boolean) => {
    this._isEmail2Touched = touched;
  };
  changeEmail2Value: (value: string) => void = (value: string) => {
    this._email2Value = value;
  };
  changePasswordValid: (valid: boolean) => void = (valid: boolean) => {
    this._isPasswordValid = valid;
  };
  changePasswordTouched: (touched: boolean) => void = (touched: boolean) => {
    this._isPasswordTouched = touched;
  };
  changePasswordValue: (value: string) => void = (value: string) => {
    this._passwordValue = value;
  };
  changePassCheckValid: (valid: boolean) => void = (valid: boolean) => {
    this._isPassCheckValid = valid;
  };
  changePassCheckTouched: (touched: boolean) => void = (touched: boolean) => {
    this._isPassCheckTouched = touched;
  };
  changePassCheckValue: (value: string) => void = (value: string) => {
    this._passCheckValue = value;
  };
  changeNameValid: (valid: boolean) => void = (valid: boolean) => {
    this._isNameValid = valid;
  };
  changeNameTouched: (touched: boolean) => void = (touched: boolean) => {
    this._isNameTouched = touched;
  };
  changeNameValue: (value: string) => void = (value: string) => {
    this._nameValue = value;
  };
}

export default new JoinStateStore();
