import axios from "axios";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";

const useLoadDetails = (num: ParamValue) => {
  const [data, setData] = useState({
    id: 0,
    title: "",
    content: "",
    boardCategory: "",
    createdAt: "",
    imageUrl: null,
  });

  useEffect(() => {
    const imported = sessionStorage.getItem("my-account");

    if (imported) {
      const parsed = JSON.parse(imported);
      const detailAxios = async () => {
        try {
          const res = await axios.get(
            `https://front-mission.bigs.or.kr/boards/${num}`,
            {
              headers: {
                Authorization: `Bearer ${parsed.accessToken}`,
              },
            }
          );

          setData(res.data);
        } catch (e) {}
      };

      detailAxios();
    }
  }, []);

  return data;
};

export default useLoadDetails;
