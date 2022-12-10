import { dayGlossary, DayType } from "../../../Models/TimeAndDate";

export interface DayOption {
    readonly value: DayType;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

export const getDays = () =>{
    let daysValues = [] as DayOption[];
    for(let i=0; i< Object.keys(dayGlossary).length; i++){
        daysValues.push({ value: Object.keys(dayGlossary)[i] as DayType, label: dayGlossary[Object.keys(dayGlossary)[i] as DayType]})
    }
    return daysValues;
  }
  
export const daySelectStyles={
    control: (baseStyles:any, state:any) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'grey' : 'red',
    }),
  }

  
