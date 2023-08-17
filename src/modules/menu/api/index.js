import { $host } from "src/shared/api/index.js";


const DELETE_MENU = "menu-list";
const FETCH_MENU_LIST = "menu-list";
const CREATE_OR_UPDATE_MENU_LIST = "menu-list";
export const fetchMenuList = () => {
  return $host.get(FETCH_MENU_LIST).then((r) => r.data);
};

export const createMenu = (menu) => {
  return $host.post(CREATE_OR_UPDATE_MENU_LIST, menu).then((r) => r.data);
};

export const deleteMenu = (id) => {
  return $host.delete(`${DELETE_MENU}/${id}`).then((r) => r.data);
};
