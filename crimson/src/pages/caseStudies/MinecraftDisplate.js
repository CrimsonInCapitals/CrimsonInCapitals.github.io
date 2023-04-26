import React from 'react';
import { CaseCard, CaseText, CaseWithAside } from '../../components/casecard';

const MinecraftDisplate = ()=> {

    return (
        <main className='home'>
            <section>
                <h1>Minecraft Poters</h1>
            </section>
            <section id='cardDeck'>
                <CaseWithAside ></CaseWithAside>
            </section>
        </main>
    );
}

export default MinecraftDisplate;