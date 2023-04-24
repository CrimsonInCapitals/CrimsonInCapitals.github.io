
const CaseStudies = ()=> {

    return (
        <main className='home'>
            <section id='Header'>
                <h1>Case Studies</h1>
                <p></p>
            </section>
            <section id='cardDeck'>
                <CaseCard size='small' Header='Bobbin & Em'/>
                <CaseCard size='medium' Header='The Dog Room'/>
                <CaseCard size='small' Header='Amazing Grace'/>
                <CaseCard size='medium' Header='Ask Italian'/>
                <CaseCard size='small' Header='Icons'/>
                <CaseCard size='small' Header='Vecotor Illustration'/>
                <CaseCard size='large' Header='Aspinal of London'/>
                <CaseCard size='medium' Header='Minecraft Posters'/>
                <CaseCard size='small' Header='Cudoni'/>
                <CaseCard size='small' Header='Eden Gardens'/>
            </section>
            
        </main>
    );
}

export default CaseStudies;