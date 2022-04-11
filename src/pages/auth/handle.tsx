import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const HandlePage: React.VFC = () => {
  const location = useLocation();
  const [redirectionPage, setRedirectionPage] = useState<string>("/");

  const getUrlParameter = useCallback(
    (name: string) => {
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

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
      // TODO: return 전에 반영시켜야함....
      setRedirectionPage(() => "/auth/login");
    }
  }, [getUrlParameter]);

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
