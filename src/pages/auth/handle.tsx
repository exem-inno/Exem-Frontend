import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// backend path
const url =
  "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080";

const HandlePage: React.VFC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url + "/user/me")
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .then((data) => {
        console.log("user data", data);
        navigate("/");
      })
      .catch((err) => {
        console.log("/user/me Error", err);
        // navigate("/auth/login");
      });
  }, [navigate]);

  return <p>로그인 시도 중 잠시만 기다리시오...</p>;
};

export default HandlePage;
