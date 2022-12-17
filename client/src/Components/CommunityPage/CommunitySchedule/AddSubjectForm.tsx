import React, {FC, useMemo, useState} from "react";
import { withCommunityRights } from "../../HOC/withCommunityRights";
import style from "../CommunityPage.module.css";
import { useForm, Controller } from "react-hook-form";
import { ISubject } from "../../../Models/Community";
import { useCommunityActions } from "../../../Hooks/useActions";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Select from "react-select";
import { getDays, DayOption } from "./selectOptions";
import "./ExternalComponents.css";
import { rolesRightsNames } from "../../../Models/RolesAndRights";


type AddSubjectFormValues = ISubject;

const AddSubjectForm:FC = (props) =>{

    const [isFormHidden, setFormHidden] = useState(true);

    const dayOptions: readonly DayOption[] = useMemo(()=>getDays(),[]);
    
    // eslint-disable-next-line
    const { register, control, handleSubmit, reset, watch, formState: { errors } } = useForm< AddSubjectFormValues >();
    const {addSubject} = useCommunityActions();

    let id_ = 5; //test

    const onSubmit = (data: AddSubjectFormValues ) =>{
        const [time_start, time_end] = data.time_range!
        const newSubject:ISubject = {
            id:id_, name:data.name, audience:data.audience, time_start:time_start,
            time_end:time_end, day:data.day, date_start:data.date_start, date_end:data.date_end } 
        addSubject(newSubject);
        reset(); 
    }

    if(isFormHidden) return <div className={style.add_subject_form_container}>
        <div onClick={()=> setFormHidden(false)} className={style.submit__button}>Добавить предметы</div></div> 
    return(
        <div className={style.add_subject_form_container}>
             <form className={style.add_publication_form_container__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form__controls}><p onClick={()=>setFormHidden(true)}>скрыть</p></div>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>Название предмета</h3>
                    {errors.name && <p className={style.field__error}>Это поле обязательно</p>}
                    <input className={style.field__input} defaultValue="" {...register("name",{ required: true, maxLength: 25 })} 
                        placeholder={"Название предмета..."}/>
                </div>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>Номер аудитории</h3>
                    {errors.audience && <p className={style.field__error}>Это поле обязательно</p>}
                    <input className={style.field__input} defaultValue="" {...register("audience",{ required: true, maxLength: 6 })} 
                        placeholder={"Номер аудитории..."}/>
                </div>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>День занятия</h3>
                    {errors.day && <p className={style.field__error}>Это поле обязательно</p>}
                    <Controller
                        name="day"
                        control={control}
                        render={({field: { onChange } }) => <Select
                            classNamePrefix="dayselect"
                            onChange={(value)=>onChange(value?.value)}
                            defaultValue={dayOptions[0]}
                            options={dayOptions} 
                        />}
                    />    
                </div>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>Продолжительность занятия</h3>
                    <Controller
                        name="time_range"
                        control={control}
                        defaultValue={['00:00', '23:59']}
                        render={({ field: { onChange, value } }) => <TimeRangePicker autoFocus={false}
                            onChange={onChange} format="HH:mm" disableClock={true} value={value} required={true} rangeDivider={"до"}/>}
                    />
                </div>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>Даты проведения занятий</h3>
                    {(errors.date_start || errors.date_end) && <p className={style.field__error}>
                        {((errors.date_start?.type || errors.date_end?.type )=== "required") && "Это поле обязательно "} 
                        {((errors.date_start?.type || errors.date_end?.type) === "pattern") && "Неправильный формат даты"}
                    </p>}
                    <div className={style.field__date_range}>
                        <input className={style.field__input} defaultValue="" 
                            {...register("date_start",{ required: true, pattern: /^\d{2}(\s)([a-z]|[а-я]){3}$/, maxLength: 6 })} 
                            placeholder={"01 мес..."}/>
                        <input className={style.field__input} defaultValue="" 
                            {...register("date_end",{ pattern: /^\d{2}(\s)([a-z]|[а-я]){3}$/, required: true, maxLength: 6 })} 
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


export default withCommunityRights(AddSubjectForm, [rolesRightsNames.canEditSchedule]);