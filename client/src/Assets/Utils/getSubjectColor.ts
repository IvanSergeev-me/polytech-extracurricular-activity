import { colorByTimeGlossary, SubjectTimeType } from "../../Models/TimeAndDate";


//return subject's background color in time it goes
export const getSubjectColor = (time_start:string, time_end:string) =>{
    let time_range = time_start.concat("-").concat(time_end);
    let subjectColor = "transpatent";
    console.log(Object.keys(colorByTimeGlossary).filter(obj => obj.toString() === time_range))
    if(Object.keys(colorByTimeGlossary).filter(obj => obj.toString() === time_range)){
        let ind = time_range as SubjectTimeType
        subjectColor = colorByTimeGlossary[ind]; 
    }
    console.log(subjectColor);
    return subjectColor;
}

