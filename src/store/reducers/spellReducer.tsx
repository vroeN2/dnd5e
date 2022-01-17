import { ActionType } from "../action-types";
import { Action } from "../actions";
import { favType } from "../interfaces/favType";

const spellReducer = (state: favType[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.FAV:
      const newItem: favType = {
        id: action.payload.index,
        details: action.payload,
      };
      return (state = [...state, newItem]);

    case ActionType.DEL:
      return state.filter((item: favType) => item.id !== action.payload);

    default:
      return state;
  }
};

export default spellReducer;
