import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const Icons = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText Header='Icon Design'size='exwide'>Using the minimum level of complexity to comuniate maximum meaning the the priamry purpose of icons. The wont always be acompanied by text, so beingable to understand the meaning of each is import. Even so, if I asked you to tell me which icon does what you would probably strugle, thats becaus icons are deply contextuals.</CaseText>

                <CaseCard size='medium' Header='Full set of icons'Image={require('../../sources/caseStudies/MicrosoftIcons/lineicons.jpg')}/>

                <CaseText size='small'>After seeing feedback on Context menus I designed this setto acompany a more consistent concept of these menus.</CaseText>

                <CaseCard size='small' Header='Dark mode Context menu examples'Image={require('../../sources/caseStudies/MicrosoftIcons/menus.jpg')}/>
                <CaseCard size='large'Header='Light mode Context menu examples'Image={require('../../sources/caseStudies/MicrosoftIcons/menusw.jpg')}/>
                <CaseText size='exwide'>Using Microsofts the fluent design guidlines I redesigned the icons used in the file explorer for Windows 10. This was after the first insider release of the new file icons for the primary files: Desktop, Downloads, Photos, Music, Vidoe, and Documents, of which I made changes to and included below.</CaseText>
                <CaseCard size='large'Header='File explorer Icon set'Image={require('../../sources/caseStudies/MicrosoftIcons/fileexplorer.jpg')}/>

            
            </section>
        </main>
    );
}

export default Icons;