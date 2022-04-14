import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// backend path
const url =
  "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080";

const HandlePage: React.VFC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url + "/user/me", { redirect: "follow" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response Error");
        }
        if (res.redirected) {
          console.log("redirection path", res.url);
          const url = res.url;
          const searchValue = "localhost:3000";
          const indexOfFirst = url.indexOf(searchValue);
          const endPoint = url.slice(indexOfFirst + searchValue.length);
          console.log("result", url, indexOfFirst, endPoint);
          navigate(endPoint);
        }
        return res.json();
      })
      .then((data) => {
        console.log("user data", data);
        navigate("/");
      })
      .catch((err) => {
        console.log("/user/me Error", err);
        navigate("/auth/login");
      });
  }, [navigate]);

  return (
    <div>
      <h1>로그인 처리 중 잠시만 기다리시오...</h1>
    </div>
  );
};

export default HandlePage;
