import { SET_COMPANY_NAME, SET_COMPANY_COLOR } from "../actionTypes";

export const setCompanyName = data => ({
  type: SET_COMPANY_NAME,
  payload: data
});

export const setCompanyColor = data => ({
  type: SET_COMPANY_COLOR,
  payload: data
});
