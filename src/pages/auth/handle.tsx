import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const HandlePage: React.VFC = () => {
  const location = useLocation();
  const [redirectionPage, setRedirectionPage] = useState<string>("/");

  const getUrlParameter = useCallback(
    (name: string) => {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

      console.log("getUrlParameter", location, location.search);
      var results = regex.exec(location.search);
      return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    [location]
  );

  useEffect(() => {
    const token = getUrlParameter("token");
    if (token) {
      localStorage.setItem("accessToken", token);
      setRedirectionPage("/");
    } else {
      setRedirectionPage("/auth/login");
    }
  }, [getUrlParameter, redirectionPage]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace={true} to={`${redirectionPage}`} />}
      />
    </Routes>
  );
};

export default HandlePage;
