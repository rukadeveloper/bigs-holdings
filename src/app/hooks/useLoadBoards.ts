import axios from "axios";
import { useEffect, useState } from "react";
import BoardStore from "../store/BoardStore";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

const useLoadBoards = () => {
  const [size] = useState(10);

  const {
    changeBoardData,
    changeFilteredBoardData,
    page,
    changeTotalPages,
    changeTotalElements,
  } = BoardStore;

  useEffect(() => {
    const importedData = sessionStorage.getItem("my-account");
    const mappingData: Board[] = [];

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
            changeFilteredBoardData(mappingData);
            changeTotalPages(response.data.totalPages);
            changeTotalElements(response.data.totalElements);
          }
        } catch (e) {}
      };

      axiosBoard();
    }
  }, [page]);
};

export default useLoadBoards;
