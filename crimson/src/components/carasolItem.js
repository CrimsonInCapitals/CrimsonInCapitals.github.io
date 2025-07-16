import React from 'react';
const CarasolItem = ({Header='Default',Image='../sources/default.png'})=> {
return(
        <article className='carasolItem'>
            <img className='carasolBanner' src={require('../sources/default.png')}/>
            <h2 className='carasolHeader'>{Header}
            </h2>
        </article>
    )
}
export default CarasolItem