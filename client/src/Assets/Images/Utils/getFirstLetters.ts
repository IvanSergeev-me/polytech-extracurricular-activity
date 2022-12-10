export const getFirstLetters = (strings:string[]) =>{
    let toReturn = "";

    for(let i = 0; i<strings.length; i++){
        let letter = strings[i].charAt(0).toUpperCase();
        toReturn+=letter;
    }
    return toReturn;
}