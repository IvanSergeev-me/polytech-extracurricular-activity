export const parseDate = (date:string) =>{
    let newDate = new Date();
    let dateToCompareRaw = new Date(date);
    let dateToday = newDate.getDate();
    let dateToCompare = dateToCompareRaw.getDate();
    if(dateToday > dateToCompare){
        return "Мероприятие состоялось"
    }
    if(dateToday < dateToCompare){
        return "Мероприятие запланировано"
    }
    if(dateToday === dateToCompare){
        return "Мероприятие сегодня"
    }
    return "Примерное время мероприятия";
}