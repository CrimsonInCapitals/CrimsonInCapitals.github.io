import React from 'react';
const CarasolCard = ({Header='Default',Image='../sources/default.png'})=> {
return(
    
        <article className='carasolCard'>
            <img className='carasolBannerSmall' src={require('../sources/default.png')}/>
            <h3 className='carasolCard'>{Header}
            </h3>
        </article>
    )
}
export default CarasolCard