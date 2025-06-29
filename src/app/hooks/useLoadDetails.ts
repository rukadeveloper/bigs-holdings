import axios from "axios";
import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingContext";
import { ParamValue } from "next/dist/server/request/params";

type Data = {
  id: number;
  title: string;
  content: string;
  boardCategory: string;
  createdAt: string;
  imageUrl: string | null;
};

const useLoadDetails = (num: string | number | ParamValue) => {
  const [data, setData] = useState<Data>({
    id: 0,
    title: "",
    content: "",
    boardCategory: "",
    createdAt: "",
    imageUrl: null,
  });

  const { openLoading, closeLoading } = useLoading();

  useEffect(() => {
    const imported = sessionStorage.getItem("my-account");

    if (imported) {
      const parsed = JSON.parse(imported);
      const detailAxios = async () => {
        try {
          openLoading();
          document.body.classList.add("whiteDim");
          const res = await axios.get(
            `https://front-mission.bigs.or.kr/boards/${num}`,
            {
              headers: {
                Authorization: `Bearer ${parsed.accessToken}`,
              },
            }
          );

          setData(res.data);
        } catch (e) {
        } finally {
          closeLoading();
          document.body.classList.remove("whiteDim");
        }
      };

      detailAxios();
    }
  }, []);

  return { data, setData };
};

export default useLoadDetails;
