export type DayType = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export type DayGlossary = Record<DayType, string>;

export const dayGlossary:DayGlossary = {"Mon":"Понедельник", "Tue":"Вторник", "Wed":"Среда", "Thu":"Четверг", "Fri":"Пятница", "Sun":"Суббота", "Sat":"Воскресенье"}