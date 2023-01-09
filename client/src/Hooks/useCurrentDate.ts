import { useMemo } from 'react'
import { getCurrentDate } from '../Assets/Utils/getCurrentDate';

export const useCurrentDate = () =>{
    return useMemo(()=>getCurrentDate(),[]);
}