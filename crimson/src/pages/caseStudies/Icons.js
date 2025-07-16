import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const Icons = ()=> {

    return (
        <>
            <section id='cardDeck'>
                <CaseText Header='Icon Design'size='exwide'>Using the minimum level of complexity to communicate maximum meaning is the primary purpose of an icon. They will not always be accompanied by text, so being able to understand the meaning of an icon is important. Out of context icons, such as the ones below, can be hard to identify but in the context of the menu, they make sense.</CaseText>

                <CaseCard size='medium' Header='Full set of icons'Image={require('../../sources/caseStudies/MicrosoftIcons/lineicons.jpg')}/>

                <CaseText size='small'>After seeing feedback on context menus, I designed this set to accompany a more consistent concept of these menus.</CaseText>

                <CaseCard size='small' Header='Dark mode Context menu examples'Image={require('../../sources/caseStudies/MicrosoftIcons/menus.jpg')}/>
                <CaseCard size='large'Header='Light mode Context menu examples'Image={require('../../sources/caseStudies/MicrosoftIcons/menusw.jpg')}/>
                <CaseText size='exwide'>Using Microsoft’s fluent design guidelines, I redesigned the icons used for the Windows 10 File Explorer menus. I also included slight redesign of the primary file icons: Desktop, Downloads, Photos, Music, Video, and Documents.</CaseText>
                <CaseCard size='large'Header='File explorer Icon set'Image={require('../../sources/caseStudies/MicrosoftIcons/fileexplorer.jpg')}/>

            
            </section>
        </>
    );
}

export default Icons;