// backend path
const url =
  "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080";

export const fetchData = async (endPoint: string) => {
  await fetch(url + endPoint, { redirect: "follow" }).then((res) => {
    if (!res.ok) {
      throw new Error("Response Error");
    }
    if (res.redirected) {
      console.log("redirection path", res.url);
      document.location = res.url;
    }
    return res.json();
  });
};
