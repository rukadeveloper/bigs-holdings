import axios from "axios";
import { useEffect } from "react";
import AccountStateStore from "../store/AccountStateStore";
import { useRouter } from "next/navigation";

const useCheckLogin = () => {
  const {
    userEmail,
    changeAccessToken,
    changeIsAuth,
    changeRefreshToken,
    logout,
  } = AccountStateStore;

  const router = useRouter();

  // useEffect
  useEffect(() => {
    // accessToken, refreshToken 가져오기
    const imported = sessionStorage.getItem("my-account");
    let parsed = null;

    if (imported) {
      parsed = JSON.parse(imported);
    }

    const refreshAPI = axios.create({
      baseURL: "https://front-mission.bigs.or.kr",
      headers: { "Content-Type": "application/json" },
    });

    const interceptor = axios.interceptors.response.use(
      (response) => {
        console.log(response);
        return response;
      },
      async (error) => {
        if (error.response.status === 401) {
          console.log("토큰 재발급 요청");

          try {
            const response = await axios.post(
              "https://front-mission.bigs.or.kr/auth/refresh",
              {
                headers: {
                  Authorization: `Bearer ${parsed.refreshToken}`,
                },
              }
            );

            if (response.status === 200) {
              sessionStorage.setItem(
                "my-account",
                JSON.stringify({
                  isAuth: true,
                  accessToken: response.data.data.accessToken,
                  refreshToken: response.data.data.refreshToken,
                  userEmail,
                  password: "",
                })
              );

              changeIsAuth(true);
              changeAccessToken(response.data.data.accessToken);
              changeRefreshToken(response.data.data.refreshToken);

              error.config.headers[
                "Authorization"
              ] = `Bearer ${parsed.accessToken}`;

              return refreshAPI(error.config);
            }
          } catch (e) {
            alert("토큰 만료로 인해 로그아웃됩니다.");
            sessionStorage.removeItem("my-account");
            logout();
            router.push("/");

            return Promise.reject(error);
          }
        }
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
};

export default useCheckLogin;
