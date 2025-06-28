import { action, computed, makeObservable, observable } from "mobx";

class WriteStateStore {
  _title: string = "";
  _content: string = "";
  _categories: string = "";
  _files: File | null = null;

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }

  get categories(): string {
    return this._categories;
  }

  get files(): File | null {
    return this._files;
  }

  constructor() {
    makeObservable(this, {
      _title: observable,
      _content: observable,
      _categories: observable,
      _files: observable,
      title: computed,
      content: computed,
      categories: computed,
      files: computed,
      setTitle: action,
      setContent: action,
      setCategory: action,
      setFiling: action,
    });
  }

  setTitle: (title: string) => void = (title: string) => {
    this._title = title;
  };

  setContent: (content: string) => void = (content: string) => {
    this._content = content;
  };

  setCategory: (category: string) => void = (category: string) => {
    this._categories = category;
  };

  setFiling: (file: File | null) => void = (file: File | null) => {
    this._files = file;
  };
}

export default new WriteStateStore();
