import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const BobbinEm = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>Bobbin & EM</h1>
            </section>
            <section id='cardDeck'>
                <CaseCard size='medium'/>
                <CaseText>I worked with the Emily to create a unique word mark that was apropriote for the business and it's sales channels.</CaseText>
                <CaseCard/>
                <CaseCard size='large'/>

            </section>
        </main>
    );
}

export default BobbinEm;