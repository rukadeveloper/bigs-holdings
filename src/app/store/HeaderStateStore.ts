import { action, makeObservable, observable, computed } from "mobx";

class HeaderStateStore {
  _isSearchOpen: boolean = false;
  _isMenuOpen: boolean = false;
  _isMobileMenuOpen: boolean = false;
  _menuIdx: number = 0;

  get isSearchOpen(): boolean {
    return this._isSearchOpen;
  }

  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  get menuIdx(): number {
    return this._menuIdx;
  }

  get isMobileMenuOpen(): boolean {
    return this._isMobileMenuOpen;
  }

  constructor() {
    makeObservable(this, {
      _isSearchOpen: observable,
      _isMenuOpen: observable,
      _menuIdx: observable,
      _isMobileMenuOpen: observable,
      searchOpen: action,
      searchClose: action,
      menuOpen: action,
      menuClose: action,
      menuChanged: action,
      mobileMenuToggle: action,
      isSearchOpen: computed,
      isMenuOpen: computed,
      menuIdx: computed,
      isMobileMenuOpen: computed,
    });
  }

  searchOpen: () => void = () => {
    this._isSearchOpen = true;
  };

  searchClose: () => void = () => {
    this._isSearchOpen = false;
  };

  menuOpen: () => void = () => {
    this._isMenuOpen = true;
  };

  menuClose: () => void = () => {
    this._isMenuOpen = false;
  };

  menuChanged: (i: number) => void = (i: number) => {
    this._menuIdx = i;
  };

  mobileMenuToggle: () => void = () => {
    this._isMobileMenuOpen = !this.isMobileMenuOpen;
  };
}

export default new HeaderStateStore();
