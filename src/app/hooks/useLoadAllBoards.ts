import axios from "axios";
import { useEffect } from "react";
import BoardStore from "../store/BoardStore";
import { observable, toJS } from "mobx";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

const useLoadAllBoards = (flag: boolean, reRender: boolean) => {
  const size = 10;

  const {
    totalPages,
    changeAllFilteredData,
    changeAllOriginalData,
    changeTotalPages,
    allFilteredData,
  } = BoardStore;

  useEffect(() => {
    reRender = false;
    reRender = true;
    if (flag || reRender) {
      console.log("all 실행");
      const imported = sessionStorage.getItem("my-account");
      let parsed = null;
      const tempData: Board[] = [];

      if (imported) {
        parsed = JSON.parse(imported);
      }

      const fetchAllPages = async (
        currentPage: number,
        tempData: Board[] = [],
        totalPagesFromServer?: number
      ): Promise<Board[]> => {
        try {
          const res = await axios.get(
            `https://front-mission.bigs.or.kr/boards?page=${currentPage}&size=${size}`,
            {
              headers: {
                Authorization: `Bearer ${parsed.accessToken}`,
              },
            }
          );

          const totalPagesServer = totalPagesFromServer ?? res.data.totalPages;
          if (currentPage === 0) {
            changeTotalPages(res.data.totalPages);
          }

          const newData = res.data.content.map((content: Board) => ({
            ...content,
            isChecked: false,
          }));
          tempData.push(...newData);

          if (currentPage < totalPagesServer - 1) {
            return fetchAllPages(currentPage + 1, tempData);
          } else {
            return tempData;
          }
        } catch (e) {
          console.error(e);
          return tempData;
        }
      };

      fetchAllPages(0).then((allData) => {
        console.log(allData);
        changeAllFilteredData(allData);
        changeAllOriginalData(allData);
      });
    }
  }, []);
};

export default useLoadAllBoards;
