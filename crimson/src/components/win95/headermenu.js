
import React, { Children } from 'react';
import { useAppContext } from './context/app';
const HeaderMenu = ({app})=> {
    const addmenu = (item)=>{
        console.log(item)
    }
    return (
        <menu>
            {app.menu.map((item)=>(
            <p
                // onFocus={''}
                key={item.display}>
                {item.display}
            </p>))}
        </menu>
    );
}

export default HeaderMenu;