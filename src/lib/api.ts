export class ApiError extends Error {
  status: number;
  constructor(url: string, status: number) {
    super(`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
    this.status = status;
  }
}

export const fetchJson = async (url: string, options?: any) => {
  const response = await fetch(
    "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080" + url,
    options
  );
  if (!response.ok) {
    throw new ApiError(url, response.status);
  }
  return await response.json();
};
