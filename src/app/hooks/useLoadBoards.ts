import axios from "axios";
import { useEffect, useState } from "react";
import BoardStore from "../store/BoardStore";
import { observer } from "mobx-react-lite";
import { observable, toJS } from "mobx";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

const useLoadBoards = (flag: boolean, reRender: boolean) => {
  const [size] = useState(10);

  const {
    changeBoardData,
    boardData,
    page,
    changeTotalPages,
    changeTotalElements,
  } = BoardStore;

  useEffect(() => {
    const mappingData: Board[] = [];
    const importedData = sessionStorage.getItem("my-account");

    reRender = false;
    reRender = true;

    if (importedData) {
      const parsedData = JSON.parse(importedData);

      const axiosBoard = async () => {
        try {
          const response = await axios.get(
            `https://front-mission.bigs.or.kr/boards?page=${page}&size=${size}`,
            {
              headers: {
                Authorization: `Bearer ${parsedData.accessToken}`,
              },
            }
          );

          if (response.status === 200) {
            response.data.content.map((c: Board) => {
              mappingData.push({ ...c, isChecked: false });
            });
            changeBoardData(mappingData);
            changeTotalPages(response.data.totalPages);
            changeTotalElements(response.data.totalElements);
          }
        } catch (e) {
          console.error(e);
        }
      };

      if (flag || reRender) {
        axiosBoard();
      }
    }
  }, [page, flag, reRender]);

  useEffect(() => {
    console.log(toJS(observable(boardData)));
  }, [boardData]);
};

export default useLoadBoards;
