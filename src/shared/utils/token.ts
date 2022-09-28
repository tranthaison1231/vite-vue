import { ACCESS_TOKEN } from "#/shared/constants";
import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get(ACCESS_TOKEN);
};
export const setToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN, token);
};
export const removeToken = () => {
  Cookies.remove(ACCESS_TOKEN);
};
