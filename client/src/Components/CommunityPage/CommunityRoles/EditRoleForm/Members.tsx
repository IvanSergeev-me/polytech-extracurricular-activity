import React, { ChangeEvent, useEffect, useState } from 'react';
import { IMember, IMemberShort } from 'Models/User';
import style from "../../CommunityPage.module.scss";
import ro_style from "../CommunityRoles.module.scss";
import { FormType } from './EditRoleForm';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { selectCommunityMembers } from 'Selectors';

type MembersProps = { rolename:string}

const Members = ({rolename}:MembersProps) => {

    const { control } = useFormContext<FormType>();

    const { fields, remove,append } = useFieldArray({
        control,
        name: "members"
    });
    
    const allMembers = useTypedSelector(selectCommunityMembers);

    const allowedMembers = allMembers.filter( ( el ) => { return(el.roles.every(r=>r.name !== rolename)) });

    const handleDelete = (index: number) => {
        remove(index);
    }

    const handleAddMember = ({id, lastname, name,group}:IMemberShort) => {
        if(!fields.some(m=>{ return(m.lastname === lastname) })){
            append({id, lastname, name,group});
        }
    }

    return (
        <div className={style.form__field}>
            <h3 className={style.field__title}>Участники</h3>
            <SearchMembers allowedMembers={allowedMembers} addMember={handleAddMember}/>
            {fields.map((m, index) =>
                <MemberRow
                    handleDelete={handleDelete}
                    index={index}
                    key={m.id}
                    id={m.id}
                    lastname={m.lastname}
                    name={m.name}
                    group={m.group}
                />)}
        </div>
    )
}

type MemberRowProps = IMemberShort & {handleDelete:(index:number)=>void; index:number}

const MemberRow = ({ id, index, lastname, name, group,handleDelete }: MemberRowProps) => {

    const removeMember = () =>{
        handleDelete(index);
    }

    return (
        <div className={ro_style.members_container__member_row}>
            <div className={ro_style.member_row__person_info}>
                <div className={ro_style.person_info__name_group}>
                    <span>{lastname}</span>
                    <span>{name}</span>
                    <span>{group}</span>
                </div>
            </div>
            <div className={style.form__controls}>
                <p onClick={removeMember}>Убрать</p>
            </div>
        </div>
    )
}

type SearchMemberProps = {addMember:({id, lastname, name,group}:IMemberShort)=>void, allowedMembers:IMember[]}

const SearchMembers = ({addMember,allowedMembers}:SearchMemberProps) =>{

    const [query, setQuery] = useState<string>("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setQuery(e.target.value);
    }

    const [membersToView, setMembersToView] = useState<IMember[]>([]);

    useEffect(() => {
        setMembersToView(allowedMembers.filter(m=>(m.lastname.startsWith(query) || m.name.startsWith(query) || m.group?.startsWith(query))))
    }, [query, allowedMembers])
    

    return(
        <div className={style.form__field}>
            <input value={query} onChange={handleChange} className={style.field__input} placeholder={"Введите имя..."} />
            {query && (membersToView.length > 0) &&
            <div className={ro_style.collapsable_wapper}>
                {membersToView.map(m => <MemberCollapsable
                    addMember={addMember}
                    id={m.id} 
                    key={m.id} 
                    image={m.image} 
                    lastname={m.lastname} 
                    name={m.name} 
                    roles={m.roles}
                    group={m.group}
                    />)}
            </div>}
        </div>
    )
}

type MemberCollapsableProps = IMember & {addMember:({id, lastname, name,group}:IMemberShort)=>void}

const MemberCollapsable = ({id,image,lastname,name,roles,group,addMember}:MemberCollapsableProps) =>{
    return(
        <div className={ro_style.collapsable_wapper__member} onClick={()=> addMember({id, lastname, name,group} as IMemberShort)}>
            <p>{name}</p>
            <p>{lastname}</p>
            <p>{group}</p>
        </div>
    )
}

export default Members;