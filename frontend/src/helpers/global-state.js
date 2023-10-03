import {atom} from "jotai";

export const user = atom(null)
export const signedIn = atom(false);
export const symbol = atom("AAPL");
export const lastTrigger = atom(null);
export const ReRender = atom(false);