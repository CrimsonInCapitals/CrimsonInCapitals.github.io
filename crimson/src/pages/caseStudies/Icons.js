import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const Icons = ()=> {

    return (
        <main className='home'>
            <section id='cardDeck'>
                <CaseText Header='Icon Design'size='exwide'>Using the minimum level of complexity to communicate maximum meaning is the primary purpose of an icon. They will not always be accompanied by text, so being able to understand the meaning of icon is important. Even so, out of context icons, like they are bellow, can be hard to identify, but in the context of the menu they make sense.</CaseText>

                <CaseCard size='medium' Header='Full set of icons'Image={require('../../sources/caseStudies/MicrosoftIcons/lineicons.jpg')}/>

                <CaseText size='small'>After seeing feedback on Context menus, I designed this set to accompany a more consistent concept of these menus.</CaseText>

                <CaseCard size='small' Header='Dark mode Context menu examples'Image={require('../../sources/caseStudies/MicrosoftIcons/menus.jpg')}/>
                <CaseCard size='large'Header='Light mode Context menu examples'Image={require('../../sources/caseStudies/MicrosoftIcons/menusw.jpg')}/>
                <CaseText size='exwide'>Using Microsoft’s fluent design guidelines, I redesigned the icons used in the file explorer for Windows 10. This was after the first insider release of the new file icons for the primary files: Desktop, Downloads, Photos, Music, Video, and Documents, of which I amended and included below.</CaseText>
                <CaseCard size='large'Header='File explorer Icon set'Image={require('../../sources/caseStudies/MicrosoftIcons/fileexplorer.jpg')}/>

            
            </section>
        </main>
    );
}

export default Icons;