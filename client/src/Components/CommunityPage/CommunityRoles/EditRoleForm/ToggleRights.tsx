import React from 'react';
import { SwitchCheckbox } from 'Components/Common/SwitchCheckbox/SwitchCheckbox';
import style from "../../CommunityPage.module.scss";
import ro_style from "../CommunityRoles.module.scss";
import { rightsGlossary, RoleRightName } from 'Models/RolesAndRights';
import { Controller, useFormContext } from 'react-hook-form';
import { FormType } from './EditRoleForm';

type ToggleRightsProps = {rights:RoleRightName[]}

const ToggleRights = ({rights}:ToggleRightsProps) =>{

    return(
        <div className={style.form__field}>
            <h3 className={style.field__title}>Доступные права роли</h3>
            {Object.keys(rightsGlossary).map((r,index) => 
                <RightWithFlag
                    index={index}
                    key={index} 
                    name={rightsGlossary[r as RoleRightName] as string} />)}
        </div>
    )
}

type RightWithFlagProps = {index:number, name:string}

const RightWithFlag = ({index,name}:RightWithFlagProps) =>{

    const { control, getValues } = useFormContext<FormType>();

    const defValue = getValues().rights[index];

    return(
        <div className={ro_style.rights_container__right_row}>
            <p>{name}</p>
            <Controller
                name={`rights.${index}`}
                defaultValue={ defValue?defValue:false }
                control={control}
                render={({field: { onChange,value } }) => <SwitchCheckbox 
                    isActive={ value }
                    checkboxName={`rights.${index}`} 
                    onSwitch={(e)=>{
                        onChange(e.target.checked);
                    }}/>}/>
        </div>
    )
}

export default ToggleRights;