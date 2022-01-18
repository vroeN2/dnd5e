import { spellType } from "./spellType";

export type spellPropsType = {
    details: spellType,
    type: string,
    id?: string,
    children?: string
}