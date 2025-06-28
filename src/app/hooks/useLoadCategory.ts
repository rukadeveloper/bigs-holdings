import axios from "axios";
import { useEffect, useState } from "react";

const useLoadCategory = () => {
  const [categories, setCategories] = useState({
    NOTICE: "",
    FREE: "",
    QNA: "",
    ETC: "",
  });

  useEffect(() => {
    const imported = sessionStorage.getItem("my-account");

    if (imported) {
      const parsed = JSON.parse(imported);

      const categoryApi = async () => {
        try {
          const res = await axios.get(
            "https://front-mission.bigs.or.kr/boards/categories",
            {
              headers: {
                Authorization: `Bearer ${parsed.accessToken}`,
              },
            }
          );

          setCategories(res.data);
        } catch (e) {}
      };

      categoryApi();
    }
  }, []);

  return categories;
};

export default useLoadCategory;
