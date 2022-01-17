import { ActionType } from "../action-types";
import { spellType } from "../interfaces/spellType";

interface addToFav {
  type: ActionType.FAV;
  payload: spellType;
}

interface deleteFromFav {
  type: ActionType.DEL;
  payload: string;
}

export type Action = addToFav | deleteFromFav;
