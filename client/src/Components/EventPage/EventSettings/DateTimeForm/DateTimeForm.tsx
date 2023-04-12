import React from 'react';
import { EventTypeShort } from 'Models/Activities';
import { InfoIcon } from 'Assets';
import { useForm } from 'react-hook-form';
import s_style from "../EventSettings.module.scss";
import style from "../../EventPage.module.scss";
import { CompareDates } from 'Assets/Utils/CompareDates';

type DateTimeFormProps = {
    info: EventTypeShort;
    isOver: boolean;
  }
  
  type DateTimeFormValues = {
    date: string,
    time_start: string,
  }
  
  const DateTimeForm = ({ info, isOver }: DateTimeFormProps) => {
  
    const { register, setError, formState: { errors }, handleSubmit, reset } = useForm<DateTimeFormValues>({
      defaultValues: { date: info.date, time_start: info.time }
    });
  
    const onSubmit = (data: DateTimeFormValues) => {
      if (!CompareDates(data.date)) {
        setError("date", {message:"Этот день уже закончился", type:"value"})
      }
      else {
        console.log(data);
        reset();
      }
      
    }
  
    const buttonText = isOver ? "Пересозать мероприятие" : "Установить дату";
  
    return (
      <div className={s_style.date_settings__date_time_from_wrapper}>
        <div className={s_style.date_time_from_wrapper__info}>
          <img src={InfoIcon} alt="info" />
          <p>Вы можете назначить и изменить дату и время проведения мероприятия,
            а также создать мероприятие заново, если оно закончилось</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={s_style.date_time_from_wrapper__form}>
          <div className={s_style.form__fields}>
            <div className={s_style.fields__field}>
              {errors["date"] && <p className={style.alert_text}>{errors.date.message?.toString()}</p>}
              <input
                placeholder={"Дата проведения - дд.мм.гггг"}
                type="text"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Это поле обязательно"
                  },
                  pattern: {
                    value: /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/,
                    message: "Требуемый формат даты - дд.мм.гггг"
                  }
                })} />
            </div>
            <div className={s_style.fields__field}>
              {errors["time_start"] && <p className={style.alert_text}>{errors.time_start.message?.toString()}</p>}
              <input
                placeholder={"Время начала - чч:мм"}
                type="text"
                {...register("time_start", {
                  required: {
                    value: true,
                    message: "Это поле обязательно"
                  },
                  pattern: {
                    value: /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/,
                    message: "Требуемый формат времени - чч:мм"
                  }
                })} />
            </div>
          </div>
          <div className={s_style.form__controls}>
            <button className={style.button_default}>{buttonText}</button>
          </div>
        </form>
      </div>
    )
  }
  
export default DateTimeForm;
  