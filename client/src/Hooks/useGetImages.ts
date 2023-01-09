import { useMemo } from 'react'
import { getImages } from '../Assets/Utils/getImages';

export const useGetImages = (files:File[]) =>{
    return useMemo(()=>getImages(files),[files]);
}