import { SET_COMPANY_NAME, SET_COMPANY_COLOR } from "../actionTypes";

const initialState = {
  companyName: "",
  companyColor: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_NAME: {
      return {
        ...state,
        companyName: action.payload
      };
    }
    case SET_COMPANY_COLOR: {
      return {
        ...state,
        companyColor: action.payload
      };
    }
    default:
      return state;
  }
};
