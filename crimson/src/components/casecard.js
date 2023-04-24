import React from 'react';
import { Link } from 'react-router-dom';
const CaseCard = ({Header='Default',Image=require('../sources/default.png'),size='small',To='/casestudies/'})=> {
return(
    <Link className={size+'Card card'} to={To}>
        <img src={Image}/>
        <h2 className='cardheader'>{Header}</h2>

    </Link>
    )
}
export default CaseCard