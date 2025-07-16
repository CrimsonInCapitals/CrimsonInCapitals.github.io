
import React from 'react';
import { AppProvider } from '../../components/win95/context/app';
import DesktopButton from '../../components/win95/desktopbutton';
const Minesweeperpage = ()=> {

    return (
        <section id='win95'>
            <AppProvider>
                    <DesktopButton appname='Minesweeper'/>
                  </AppProvider>
        </section>
    );
}

export default Minesweeperpage;