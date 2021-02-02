import React from 'react';
import Styles from './UserForm.module.css';

const UserForm = ({onClick, user, setUser}) => {
    return(
        <form className={Styles.form} onSubmit={onClick}>
            <label className={Styles.label}>
                Nombre:
                <input className={Styles.input} type="text" name="name" value={user.name} onChange={e => setUser({...user, name: e.currentTarget.value})}/>
            </label>
            <label className={Styles.label}>
                Email: 
                <input className={Styles.input} type="email" name="email" value={user.email} onChange={e => setUser({...user, email: e.currentTarget.value})}/>
            </label>
            <label className={Styles.label}>
                Telefono:
            <input className={Styles.input} type="number" name="phone" value={user.phone} onChange={e => setUser({...user, phone: e.currentTarget.value})}/>
            </label>
            <button type="submit">Comprar</button>
        </form>
    )
}

export default UserForm;