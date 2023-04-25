import React from 'react';
import { Link } from 'react-router-dom';
const CaseCard = ({Header='Default',Image=require('../sources/default.png'),size='small',To})=> {
return(
    To ?
    <Link className={size+'Card card'} to={To}>
        <img src={Image}/>
        <h2 className='cardheader'>{Header}</h2>

    </Link>:
    <article className={size+'Card card'}>
    <img src={Image}/>
    <h2 className='cardheader'>{Header}</h2>

</article>
    )
}
export default CaseCard