import { typeGlossary } from './../../../Models/Activities/index';

export const TypeOptions = [
    {value:"both", label:"Не важно"},
    {value:Object.keys(typeGlossary)[0], label:typeGlossary.community},
    {value:Object.keys(typeGlossary)[1], label:typeGlossary.event},
]

export const LocationOptions = [
    {value:"NA", label: "Не важно"},
    {value:"BS", label: "Большая Семеновская ул."},
    {value:"PR", label: "Прянишникова ул."},
    {value:"AV", label: "Автозаводская ул."},
    {value:"OT", label: "Другое место"},
]
    
