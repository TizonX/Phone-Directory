import { ADD_USER_DETAILS, REMOVE_USER_DETAILS } from "../Constants";
const initialState = [];

export const usersDetails = (state = initialState, action) => {
  // validate before adding
  let validName = '';
  let validPhone = false;
  const checkPhone = state.find(({ name,phone }) => {
    if (phone === action.payload.phone) {
      validPhone = true;
      validName = name;
    }
  });
  // this is for reoving the data from the list
  const updateState = state.filter((data) => {
    return data.id !== action.payload;
  });

  switch (action.type) {
    case ADD_USER_DETAILS:
      console.warn("validPhone ", validPhone);
      if (validPhone) {
        alert(`Phone No. already exist with name: ${validName}`);
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            phone: action.payload.phone,
          },
        ];
      }
      break;
    case REMOVE_USER_DETAILS:
      return [...updateState];
    default:
      return state;
  }
};
