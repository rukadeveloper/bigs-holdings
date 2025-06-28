import { action, computed, makeObservable, observable } from "mobx";

class CategoryStore {
  _category: string = "분류 전체";
  _isSelected: boolean = false;

  get category(): string {
    return this._category;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  constructor() {
    makeObservable(this, {
      _category: observable,
      _isSelected: observable,
      category: computed,
      isSelected: computed,
      changeCategory: action,
      changeIsSelected: action,
    });
  }

  changeCategory: (category: string) => void = (category: string) => {
    this._category = category;
  };
  changeIsSelected: (isSelect: boolean) => void = (isSelect: boolean) => {
    this._isSelected = isSelect;
  };
}

export default new CategoryStore();
