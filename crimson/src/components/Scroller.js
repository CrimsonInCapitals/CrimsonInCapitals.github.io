import '../styling/scroller.css'

import React from 'react';

const Scroller = ({children})=> {
return(
        <section className='scroller'>
            <div>
                {children}
            </div>
        </section>
    )
}
export default Scroller