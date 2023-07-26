import { NullString } from "./types";

export const getTokenAuth = (): NullString => {
    return localStorage.getItem('token');
}

export const setLocalStorage = (key: string, val: string): void => {
    localStorage.setItem(key, val);
}