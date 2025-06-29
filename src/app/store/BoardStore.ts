import { action, computed, makeObservable, observable } from "mobx";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

class BoardStore {
  _boardData: Board[] = [];
  _filteredBoardData: Board[] = [];
  _page: number = 0;
  _totalElements: number = 0;
  _totalPages: number = 0;
  _allOriginalData: Board[] = [];
  _allFilteredData: Board[] = [];
  _checkedOn: boolean = false;
  _boardOpen: boolean = false;
  _boardAllOpen: boolean = false;
  _patchOccur: boolean = false;
  _deleteOccur: boolean = false;

  get boardData(): Board[] {
    return this._boardData;
  }

  get filteredBoardData(): Board[] {
    return this._filteredBoardData;
  }

  get page(): number {
    return this._page;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  get allOriginalData(): Board[] {
    return this._allOriginalData;
  }

  get allFilteredData(): Board[] {
    return this._allFilteredData;
  }

  get checkedOn(): boolean {
    return this._checkedOn;
  }

  get boardOpen(): boolean {
    return this._boardOpen;
  }

  get boardAllOpen(): boolean {
    return this._boardAllOpen;
  }

  get patchOccur(): boolean {
    return this._patchOccur;
  }

  get deleteOccur(): boolean {
    return this._deleteOccur;
  }

  constructor() {
    makeObservable(this, {
      _boardData: observable,
      _filteredBoardData: observable,
      _page: observable,
      _totalPages: observable,
      _totalElements: observable,
      _allOriginalData: observable,
      _allFilteredData: observable,
      _checkedOn: observable,
      _boardOpen: observable,
      _boardAllOpen: observable,
      _patchOccur: observable,
      _deleteOccur: observable,
      boardData: computed,
      filteredBoardData: computed,
      page: computed,
      totalPages: computed,
      totalElements: computed,
      allOriginalData: computed,
      allFilteredData: computed,
      checkedOn: computed,
      boardOpen: computed,
      boardAllOpen: computed,
      patchOccur: computed,
      deleteOccur: computed,
      changeBoardData: action,
      changeFilteredBoardData: action,
      changePage: action,
      changeTotalPages: action,
      changeTotalElements: action,
      changeAllOriginalData: action,
      changeAllFilteredData: action,
      changeCheckedOn: action,
      changeBoardOn: action,
      changeBoardAllOpen: action,
      changePatchOccur: action,
      changeDeleteOccur: action,
    });
  }

  changeBoardData: (board: Board[]) => void = (board: Board[]) => {
    this._boardData = board;
  };

  changeFilteredBoardData: (fBoard: Board[]) => void = (fBoard: Board[]) => {
    this._filteredBoardData = fBoard;
  };

  changePage: (pg: number) => void = (pg: number) => {
    this._page = pg;
  };

  changeTotalPages: (tpg: number) => void = (tpg: number) => {
    this._totalPages = tpg;
  };

  changeTotalElements: (te: number) => void = (te: number) => {
    this._totalElements = te;
  };

  changeAllOriginalData: (od: Board[]) => void = (od: Board[]) => {
    this._allOriginalData = od;
  };

  changeAllFilteredData: (of: Board[]) => void = (of: Board[]) => {
    this._allFilteredData = of;
  };

  changeCheckedOn: (check: boolean) => void = (check: boolean) => {
    this._checkedOn = check;
  };

  changeBoardOn: (bos: boolean) => void = (bos: boolean) => {
    this._boardOpen = bos;
  };

  changeBoardAllOpen: (bas: boolean) => void = (bas: boolean) => {
    this._boardAllOpen = bas;
  };

  changePatchOccur: (poc: boolean) => void = (poc: boolean) => {
    this._patchOccur = poc;
  };

  changeDeleteOccur: (doc: boolean) => void = (doc: boolean) => {
    this._deleteOccur = doc;
  };
}

export default new BoardStore();
