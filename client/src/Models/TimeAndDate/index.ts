export type DayType = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export type DayGlossary = Record<DayType, string>;

export const dayGlossary:DayGlossary = 
    {"Mon":"Понедельник", "Tue":"Вторник", "Wed":"Среда", "Thu":"Четверг", "Fri":"Пятница", "Sun":"Суббота", "Sat":"Воскресенье"}

export type SubjectTimeType = "09:00-10:30" | "10:40-12:10" | "12:20-13:50" | "14:30-16:00" | "16:10-17:40";

export type ColorByTimeGlossary = Record<SubjectTimeType, string>

export const colorByTimeGlossary:ColorByTimeGlossary = 
    {"09:00-10:30":"#FC0FC0", "10:40-12:10":"#FF2B2B" , "12:20-13:50":"#8B00FF", "14:30-16:00":"#8B00FF", "16:10-17:40":"#8B00FF"}