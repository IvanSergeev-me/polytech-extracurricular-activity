import React from 'react';
import { IContact } from '../../../Models/Activities';
import ActivityContact from '../../Common/ActivityContact/ActivityContact';
import style from "../ActivityInfo.module.scss";

type ActivityContactsProps = {links:IContact[], contacts:IContact[]}

export const ActivityContacts = ({contacts,links}:ActivityContactsProps) => {
  return (
    <div className={style.activity_container__contacts_and_links}>
        <div className={style.contacts_and_links__content}>
            <h2 className={style.title}>Ссылки</h2>
            <ul className={style.contacts_list}>
                {links.map(link => <li 
                    key={link.id} 
                    className={style.contacts_list__row}>
                        <ActivityContact id={link.id} 
                            key={link.id} name={link.name} 
                            contact={link.contact} 
                            type={link.type}/>
                            </li>)}
            </ul>
        </div>
        <div className={style.contacts_and_links__content}>
            <h2 className={style.title}>Контакты</h2>
            <ul className={style.contacts_list}>
                {contacts.map(contact => <li  
                    key={contact.id} 
                    className={style.contacts_list__row}>
                        <ActivityContact 
                            id={contact.id} 
                            key={contact.id} 
                            name={contact.name} 
                            contact={contact.contact} 
                            type={contact.type}/></li>)}
            </ul>
        </div>
    </div>
  )
}
