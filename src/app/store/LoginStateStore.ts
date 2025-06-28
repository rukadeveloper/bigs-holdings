import { action, computed, makeObservable, observable } from "mobx";

class LoginStateStore {
  _idValue: string = "";
  _idValid: boolean = false;
  _idError: string = "";
  _idTouched: boolean = false;
  _passValue: string = "";
  _passValid: boolean = false;
  _passError: string = "";
  _passTouched: boolean = false;
  _messageLoading: boolean = false;
  _successMessage: string = "";
  _failedMessage: string = "";
  _alertOpen: boolean = false;

  get idValue(): string {
    return this._idValue;
  }

  get idValid(): boolean {
    return this._idValid;
  }

  get idError(): string {
    return this._idError;
  }

  get idTouched(): boolean {
    return this._idTouched;
  }

  get passValue(): string {
    return this._passValue;
  }

  get passValid(): boolean {
    return this._passValid;
  }

  get passError(): string {
    return this._passError;
  }

  get passTouched(): boolean {
    return this._passTouched;
  }

  get messageLoading(): boolean {
    return this._messageLoading;
  }

  get successMessage(): string {
    return this._successMessage;
  }

  get failedMessage(): string {
    return this._failedMessage;
  }

  get alertOpen(): boolean {
    return this._alertOpen;
  }

  constructor() {
    makeObservable(this, {
      _idValue: observable,
      _idValid: observable,
      _idError: observable,
      _idTouched: observable,
      _passValue: observable,
      _passValid: observable,
      _passError: observable,
      _passTouched: observable,
      _messageLoading: observable,
      _successMessage: observable,
      _failedMessage: observable,
      _alertOpen: observable,
      idValue: computed,
      idValid: computed,
      idError: computed,
      idTouched: computed,
      passValue: computed,
      passValid: computed,
      passError: computed,
      passTouched: computed,
      messageLoading: computed,
      successMessage: computed,
      failedMessage: computed,
      alertOpen: computed,
      changeIdValue: action,
      changeIdValid: action,
      changeIdError: action,
      changeIdTouched: action,
      changePassValue: action,
      changePassValid: action,
      changePassError: action,
      changePassTouched: action,
      changeSuccessMessage: action,
      changeFailedMessage: action,
      changeAlertOpen: action,
      changeMessageLoading: action,
    });
  }

  changeIdValue: (value: string) => void = (value: string) => {
    this._idValue = value;
  };

  changeIdValid: (valid: boolean) => void = (valid: boolean) => {
    this._idValid = valid;
  };

  changeIdError: (error: string) => void = (error: string) => {
    this._idError = error;
  };

  changeIdTouched: (touched: boolean) => void = (touched: boolean) => {
    this._idTouched = touched;
  };

  changePassValue: (value: string) => void = (value: string) => {
    this._passValue = value;
  };

  changePassValid: (valid: boolean) => void = (valid: boolean) => {
    this._passValid = valid;
  };

  changePassError: (error: string) => void = (error: string) => {
    this._passError = error;
  };

  changePassTouched: (touched: boolean) => void = (touched: boolean) => {
    this._passTouched = touched;
  };

  changeSuccessMessage: (sm: string) => void = (sm: string) => {
    this._successMessage = sm;
  };

  changeAlertOpen: (ao: boolean) => void = (ao: boolean) => {
    this._alertOpen = ao;
  };

  changeMessageLoading: (ml: boolean) => void = (ml: boolean) => {
    this._messageLoading = ml;
  };

  changeFailedMessage: (fm: string) => void = (fm: string) => {
    this._failedMessage = fm;
  };
}

export default new LoginStateStore();
