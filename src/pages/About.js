import './About.scss';

const About = () => (
    <div className="container-about">
        <h1 className='about-title--h1'>BoardGameGeek Collection Finder</h1>

        <h2 className='about-title--h2'>Overview</h2>
        <p className='about-text'>BoardGameGeek Collection Finder is a simple Single Page Application (SPA) that fetches data from the <a href='https://boardgamegeek.com/wiki/page/BGG_XML_API2#toc0' target="_blank">BoardGameGeek API</a> to display a user collection.</p>

        <h2 className='about-title--h2'>Highlights</h2>
        <ul className='about-list'>
            <li>Created with React</li>
            <li>Responsive</li>
            <li>Follows DRY and SOLID approaches for designing code</li>
            <li>Open Source</li>
        </ul>

        <h2 className='about-title--h2'>Contact</h2>
        <p className='about-text'>Check my resume for more information about me and my previous work:</p>

        <a className='about-resume' href='https://drive.google.com/file/d/1XgV9989OaVR1M4N3Lc-9g_D9KUvnzYl8/view?usp=sharing' target="_blank">
            <i className="fa-solid fa-file-pdf about-resume__icon"></i>
            <span className='about-resume__text'>Download my Resume</span></a>

    </div>
);

export default About;