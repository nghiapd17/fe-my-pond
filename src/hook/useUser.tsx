import React from "react";

export enum USER_ACTIONS {
  UPDATE = "UPDATE",
  //   DROP = "DROP",
}

interface UserContextState {
  userName: string;
  dateOfBirth: number;
  phoneNumber: string;
}

const reducer = (
  state: UserContextState,
  action: { type: USER_ACTIONS; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.UPDATE: {
      return { ...state, cart: payload };
    }
    // case CART_ACTIONS.DROP: {
    //   return { ...state, cart: null };
    // }
    default: {
      return state;
    }
  }
};

const initialState: UserContextState = {
  userName: "",
  dateOfBirth: 0,
  phoneNumber: "",
};

export const useUser = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const useContextValue = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  const UserContext = React.createContext(useContextValue);

  return { useContextValue, UserContext };
};
