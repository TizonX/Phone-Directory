import { ADD_USER_DETAILS, REMOVE_USER_DETAILS } from "../Constants";
export const addUserDetails = (userInfo) => {
  //
  // console.warn("action-addSub: ", userInfo);
  //
  return {
    type: ADD_USER_DETAILS,
    payload: userInfo,
  };
};

export const removeUserDetails = (id) => {
  //
  // console.warn("action-remSub: ", id);
  //
  return {
    type: REMOVE_USER_DETAILS,
    payload: id,
  };
};
