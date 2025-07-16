import { Link } from 'react-router-dom';
import { CaseCard, CaseText } from '../../components/casecard';
import { H1, P } from '../../components/StyledComponents';

const Page = ()=> {

    return (
        <>
            <section className='content'>
                <H1>Amazing Grace</H1>
                <P>By researching the brand and analysing its aesthetic, I was able to design this set of icons for use on social media and on their website.</P>
                <img src={require('../../sources/articals/amazinggrace/stylebreakdown.png')} alt="a colour ration pie chart, and storke style indicaotr"/>
                <P>I first focused on identifying key colours the boutique used. Then I worked out ratios in which they were used. Looking deeper, I concluded that using gentle tapering strokes would be the best fit for the brand</P>
                <img src={require('../../sources/articals/amazinggrace/typeicons.png')} alt='a set of 8 icons of different styles of underware'/>

                <P>These icons I designed for the measurements page.</P>
                <img src={require('../../sources/articals/amazinggrace/sizing icons.png')} alt='incons depicting how to take messurments for bra sizing'/>

            </section>
        </>
    );
}

const Bento = ()=>{
    return(
        <Link to='../articals/amazinggrace' className='QuickBento Amazinggracebento'/>
    )
}

export const properties=[[2,2],'Amazing Grace',1,'Eye capturing visuals for a small botique','amazinggrace',<Bento/>,<Page/>]