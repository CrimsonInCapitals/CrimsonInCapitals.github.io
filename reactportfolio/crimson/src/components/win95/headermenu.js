
import React, { Children } from 'react';
import { useAppContext } from './context/app';
const HeaderMenu = ({app})=> {

    return (
        <menu>
            {app.menu.map((item)=>(<p key={item.display}>{item.display}</p>))}
        </menu>
    );
}

export default HeaderMenu;