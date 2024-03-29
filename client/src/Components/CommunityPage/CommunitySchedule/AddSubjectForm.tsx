import React, {FC, useMemo, useState} from "react";
import { withCommunityRights } from "../../HOC/withCommunityRights";
import "./ExternalComponents.css";
import style from "../CommunityPage.module.scss";
import sc_style from "./CommunitySchedule.module.scss";
import { useForm, Controller } from "react-hook-form";
import { ISubject } from "../../../Models/Community";
import { useCommunityActions } from "../../../Hooks/useActions";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Select from "react-select";
import { getDays, DayOption } from "./selectOptions";
import { RolesRightsNames } from "../../../Models/RolesAndRights";
import { datePattern } from "../../../Models/TimeAndDate";


type AddSubjectFormValues = ISubject;

const AddSubjectForm:FC = (props) =>{

    const [isFormHidden, setFormHidden] = useState(true);

    const dayOptions: readonly DayOption[] = useMemo(()=>getDays(),[]);
    
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm< AddSubjectFormValues >({defaultValues:{} as AddSubjectFormValues});
    const {addSubject} = useCommunityActions();

    const onSubmit = (data: AddSubjectFormValues ) =>{
        const [time_start, time_end] = data.time_range!
        const newSubject:ISubject = {
            id:-1, name:data.name, audience:data.audience, time_start:time_start,
            time_end:time_end, day:data.day, date_start:data.date_start, date_end:data.date_end } 
        addSubject(newSubject);
        reset(); 
    }

    if(isFormHidden) return <div className={sc_style.add_subject_form_container}>
        <div onClick={()=> setFormHidden(false)} className={style.submit__button}>Добавить предметы</div></div> 
    return(
        <div className={sc_style.add_subject_form_container}>
             <form className={sc_style.add_subject_form_container__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form__controls}><p onClick={()=>setFormHidden(true)}>скрыть</p></div>
                <div className={style.form__field}>
                    <h3 className={style.field__title}>Название предмета</h3>
                    {errors.name && <p className={style.field__error}>Это поле обязательно</p>}
                    <input className={style.field__input} defaultValue="" {...register("name",{ required: true, maxLength: 25 })} 
                        placeholder={"Название предмета..."}/>
                </div>
                <div className={style.form__field}>
                    <h3 className={style.field__title}>Номер аудитории</h3>
                    {errors.audience && <p className={style.field__error}>Это поле обязательно</p>}
                    <input className={style.field__input} defaultValue="" {...register("audience",{ required: true, maxLength: 6 })} 
                        placeholder={"Номер аудитории..."}/>
                </div>
                <div className={style.form__field}>
                    <h3 className={style.field__title}>День занятия</h3>
                    {errors.day && <p className={style.field__error}>Это поле обязательно</p>}
                    <Controller
                        name="day"
                        control={control}
                        rules={ {required:true} }
                        defaultValue={dayOptions[0].value}
                        render={({field: { onChange } }) => <Select
                            classNamePrefix="dayselect"
                            onChange={(value)=>onChange(value?.value)}
                            defaultValue={dayOptions[0]}
                            options={dayOptions} 
                        />}
                    />    
                </div>
                <div className={style.form__field}>
                    <h3 className={style.field__title}>Продолжительность занятия</h3>
                    <Controller
                        name="time_range"
                        control={control}
                        defaultValue={['00:00', '23:59']}
                        render={({ field: { onChange, value } }) => <TimeRangePicker autoFocus={false}
                            onChange={onChange} format="HH:mm" disableClock={true} value={value} required={true} rangeDivider={"до"}/>}
                    />
                </div>
                <div className={style.form__field}>
                    <h3 className={style.field__title}>Даты проведения занятий</h3>
                    {(errors.date_start || errors.date_end) && <p className={style.field__error}>
                        {((errors.date_start?.type || errors.date_end?.type )=== "required") && "Это поле обязательно "} 
                        {((errors.date_start?.type || errors.date_end?.type) === "pattern") && "Неправильный формат даты"}
                    </p>}
                    <div className={style.field__date_range}>
                        <input className={style.field__input} defaultValue="" 
                            {...register("date_start",{ required: true, pattern: datePattern, maxLength: 6 })} 
                            placeholder={"01 мес..."}/>
                        <input className={style.field__input} defaultValue="" 
                            {...register("date_end",{ pattern: datePattern, required: true, maxLength: 6 })} 
                            placeholder={"31 мес..."}/>
                    </div>
                </div>
                <div className={style.form__submit}>
                    <button type="submit" className={style.submit__button}>Добавить в расписание</button>
                </div>
            </form>
        </div>
    )
}


export default withCommunityRights(AddSubjectForm, [RolesRightsNames.canEditSchedule]);