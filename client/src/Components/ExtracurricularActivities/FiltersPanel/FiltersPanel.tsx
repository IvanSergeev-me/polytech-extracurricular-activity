import React, { useState } from 'react';
import f_style from "./FiltersPanel.module.scss";
import "./FiltersSelect.scss";
import { ActivityType } from 'Models/Activities';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { LocationOptions, TypeOptions } from './FilterOptions';

const FiltersPanel = () => {

    const [isCollapsed, setCollapsed] = useState(true);

    const expandTitleText = isCollapsed ? "Дополнительные настройки поиска" : "Скрыть панель";

    return (
        <div className={f_style.activities_container__filters_panel_wrapper}>
            <p onClick={() => setCollapsed(!isCollapsed)} className={f_style.filters_panel_wrapper__expand_title}>{expandTitleText}</p>
            {!isCollapsed && <Panel />}
        </div>
    )
}

type FiltersType = {
    type: ActivityType | "both";
    location: string;
}

const Panel = () => {

    const onSubmit = (data: FiltersType) => {
        console.log(data)
    }

    const { control,  handleSubmit } = useForm<FiltersType>();

    return (
        <div className={f_style.filters_panel_wrapper__panel_expanded}>
            <div className={f_style.panel_expanded__type_row}>
                <h2>Фильтровать по:</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={f_style.type_row__form}>
                    <div className={f_style.form__filter_container}>
                        <Controller
                            name="type"
                            control={control}
                            defaultValue={TypeOptions[0].value as "both"}
                            render={({ field: { onChange } }) => <Select
                                classNamePrefix="filter_select"
                                onChange={(value) => onChange(value?.value)}
                                defaultValue={TypeOptions[0]}
                                options={TypeOptions}
                            />}
                        />
                    </div>
                    <div className={f_style.form__filter_container}>
                        <Controller
                            name="location"
                            control={control}
                            defaultValue={LocationOptions[0].value}
                            render={({ field: { onChange } }) => <Select
                                classNamePrefix="filter_select"
                                onChange={(value) => onChange(value?.value)}
                                defaultValue={LocationOptions[0]}
                                options={LocationOptions}
                            />}
                        />
                    </div>
                    <div className={f_style.form__controls}>
                        <button type='submit'>Применить фильтры</button>
                    </div>
                </form>
            </div>
            <div className={f_style.panel_expanded__type_row}>
                <h2>Сортировать по:</h2>
                <div className={f_style.type_row__sort_row}>
                    <button>Кол-во участников</button>
                    <button>Дата создания</button>
                    <button>Популярности</button>
                </div>
            </div>
        </div>
    )
}

export default FiltersPanel;
