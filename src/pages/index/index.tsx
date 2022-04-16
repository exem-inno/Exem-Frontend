import React, { useEffect } from "react";

const MainPage: React.VFC = () => {
  useEffect(() => {
    // fetch("http://localhost:8080/user/me", {
    //   redirect: "follow",
    //   credentials: "include",
    // })
    // fetch("/user/me", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   redirect: "follow",
    // })
    fetch("http://localhost:8080/user/me", {
      credentials: "include",
      // redirect: "follow",
    })
      .then((res) => {
        if (res.redirected) {
          console.log("res.url", res.url);
          // document.location = res.url;
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default MainPage;
