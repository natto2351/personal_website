import Button from './Button';

const Header = () =>
{
    return(
        <section class="headerImage" id="home">
            <div class="center-box">
                <span class="headertext headertext__primary">Nathaniel Pereira</span>
                <span class="headertext headertext_secondary margin-bottom-small">Budding IT Generalist // Dad joke repository</span>
                <Button class="btn btn--white" anchor= {'#qualifications'}>About Myself</Button>
                <Button class="btn btn--white" anchor= {'#footer'}>Contact Me</Button>
            </div>
            
        </section>
    );
}

export default Header;