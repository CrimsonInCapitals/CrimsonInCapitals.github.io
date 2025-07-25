import React from 'react';
import { CaseCard, CaseText } from '../../components/casecard';

const AmazingGrace = ()=> {

    return (
        <>
            <section id='con'>
                <CaseText size='exwide'Header='Amazing Grace'>By researching the brand and analysing its aesthetic, I was able to design this set of icons for use on social media and on their website.</CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/pallet.jpg')}/>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/chart.jpg')}/>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/strokes.jpg')}/>
                <CaseText size='exwide'>I first focused on identifying key colours the boutique used. Then I worked out ratios in which they were used. Looking deeper, I concluded that using gentle tapering strokes would be the best fit for the brand</CaseText>
                <CaseCard size='large' Image={require('../../sources/caseStudies/amazingGrace/icons.jpg')}/>
                <CaseText size='exwide'></CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/above.jpg')}/>
                <CaseText >These icons I designed for the measurements page.</CaseText>
                <CaseCard Image={require('../../sources/caseStudies/amazingGrace/bust.jpg')}/>
            </section>
        </>
    );
}

export default AmazingGrace;