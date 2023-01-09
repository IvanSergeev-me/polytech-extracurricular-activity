import { useCallback } from "react";
import { getFirstLetters } from "../Assets/Utils/getFirstLetters";

export const useFirstLetters = (strings:string[]) =>{
    const firstLetters = useCallback(()=> getFirstLetters(strings), [strings]);
    const letters = firstLetters();

    return letters;
}