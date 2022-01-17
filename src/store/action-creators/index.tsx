import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { spellType } from "../interfaces/spellType";

export const addFav = (details: spellType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FAV,
      payload: details,
    });
  };
};

export const delFav = (details: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEL,
      payload: details,
    });
  };
};
