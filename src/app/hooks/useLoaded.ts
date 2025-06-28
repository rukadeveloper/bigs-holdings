import { useEffect } from "react";
import AccountStateStore from "../store/AccountStateStore";

const useLoaded = () => {
  const {
    changeIsAuth,
    changeAccessToken,
    changeRefreshToken,
    changeUserEmail,
  } = AccountStateStore;

  useEffect(() => {
    const imported = sessionStorage.getItem("my-account");
    let parsed = null;

    if (imported) {
      parsed = JSON.parse(imported);

      changeIsAuth(parsed.isAuth);
      changeAccessToken(parsed.accessToken);
      changeRefreshToken(parsed.refreshToken);
      changeUserEmail(parsed.userEmail);
    }
  }, []);
};

export default useLoaded;
