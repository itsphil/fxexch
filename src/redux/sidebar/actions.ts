import { SIDEBAR_TOGGLE } from "./actionTypes";

export const sidebarToggle = state => ({
  type: SIDEBAR_TOGGLE,
  payload: { state }
});
