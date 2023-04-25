import React, { Children } from 'react';
import { Link } from 'react-router-dom';
const CaseText = ({Header='Default',Image=require('../sources/default.png'),size='small',To,children})=> {
return(
    <div className={size+'Card card'}>
        <p>{children}</p>
    </div>
    )
}
export default CaseText