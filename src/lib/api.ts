import { useNavigate } from "react-router-dom";

// backend path
const url =
  // "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080";
  "http://localhost:8080";

export const useFetchApi = async (endPoint: string, options?: object) => {
  const navigate = useNavigate();

  await fetch(url + endPoint, { ...options, redirect: "follow" }).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Response Error");
      }
      if (res.redirected) {
        const localHost = "localhost:8080";
        const indexOfFirst = res.url.indexOf(localHost);
        const path = res.url.slice(indexOfFirst + localHost.length);
        navigate(path + "auth/login");
      }
      return res.json();
    }
  );
};
