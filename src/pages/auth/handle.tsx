import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const HandlePage = () => {
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

    console.log("token", token);

    if (token) {
      console.log("성공");
      localStorage.setItem("accessToken", token);
      setRedirectionPage("/");
    } else {
      console.log("실패");
      setRedirectionPage("/auth/login");
    }
  }, [getUrlParameter]);

  return (
    <Routes>
      <Route
        path="/auth/login"
        element={<Navigate replace to={`${redirectionPage}`} />}
      />
    </Routes>
  );
};

export default HandlePage;
