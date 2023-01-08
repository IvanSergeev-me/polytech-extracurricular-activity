import React , { FC } from "react";
import { useCommunityActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { ISubject } from "../../../Models/Community";
import { rolesRightsNames } from "../../../Models/RolesAndRights";
import { dayGlossary, DayType } from "../../../Models/TimeAndDate";
import { selectCommunitySchedule } from "../../../Selectors";
import { withCommunityRights } from "../../HOC/withCommunityRights";
import style from "../CommunityPage.module.css";
import sc_style from "./CommunitySchedule.module.css";
import AddSubjectForm from "./AddSubjectForm";

interface CommunityScheduleProps {
    
}
 
const CommunitySchedule: FC<CommunityScheduleProps> = (props) => {

    
    return ( 
    <div className={sc_style.main_content__schedule_section}>
        <h2 className={style.title}>Расписание</h2>
        <AddSubjectForm />
        <SubjectsContainer />
    </div>
    );
}
 
export default CommunitySchedule;

interface ScheduleDayProps {
    day_name: DayType;
    subjects: ISubject[];
}

const ScheduleDay:FC<ScheduleDayProps> = (props) =>{
    if(props.subjects.length===0) return null;
    return(
        <div className={sc_style.days__day_container}>
            <h2 className={sc_style.day_container__day_title}>{dayGlossary[props.day_name]}</h2>
            <div className={sc_style.day_container__subjects}>
                {props.subjects.map(s => <Subject 
                    key={s.id} 
                    id={s.id} 
                    name={s.name} 
                    audience={s.audience} 
                    day={s.day} 
                    time_start={s.time_start} 
                    time_end={s.time_end} 
                    date_start={s.date_start} 
                    date_end={s.date_end}/>)}
            </div>
        </div>
    )
}

const SubjectsContainer:FC = (props) =>{

    let subjects = useTypedSelector(selectCommunitySchedule);

    return(
        <div className={sc_style.schedule_section__days}>
            {(Object.keys(dayGlossary) as DayType[]).map(day => <ScheduleDay key={day} subjects={subjects.filter(s => s.day === day)} day_name={day}/>)}
        </div>
    )
}

const Subject:FC<ISubject> = (props) =>{

    const { deleteSubject } = useCommunityActions();

    const deleteThisSubject = () =>{
        deleteSubject(props.id);
    }
    
    //import { getSubjectColor } from "../../../Assets/Images/Utils/getSubjectColor";
    //const subjectColor = useMemo(()=>getSubjectColor(props.time_start, props.time_end),[]) ;
    //console.log(subjectColor)
    // style={{background:subjectColor}}

    return(
        <div className={sc_style.subjects__subject_container}>
            <div className={sc_style.subject_container__top}>
                <div className={sc_style.subject_container__time}>
                    <span>{props.time_start}</span>
                    <span>-</span>
                    <span>{props.time_end}</span>
                </div>
                <div className={sc_style.subject_container__audience}>{props.audience}</div>
                <DeleteSubjectWithRights deleteSubject={deleteThisSubject}/>
            </div>
            <h3 className={sc_style.subject_container__name}>{props.name}</h3>
            <div className={sc_style.subject_container__date}>
                <span>{props.date_start}</span>
                <span>-</span>
                <span>{props.date_end}</span>
            </div>
        </div>
    )
}


interface DeleteSubjectProps{
    deleteSubject: ()=>void
}

const DeleteSubject:FC<DeleteSubjectProps> = (props) =>{
    return(
        <div className={sc_style.subject_container__delete}>
            <p onClick={props.deleteSubject}>Удалить</p>
        </div>
    );
}

const DeleteSubjectWithRights = withCommunityRights(DeleteSubject, [rolesRightsNames.canEditSchedule]);