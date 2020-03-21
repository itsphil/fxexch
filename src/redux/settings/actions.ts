import { DARKMODE_TOGGLE } from "./actionTypes";

export const darkModeToggle = state => ({
  type: DARKMODE_TOGGLE,
  payload: { state }
});
