import avatar from '../images/Nat-face-1.jpg'

const Header = () =>
{
    return(
        <section class="headerImage" id="home">
                <img src= {avatar} alt ="avatar 1" class="avatar-1"></img>
                <span class="headertext headertext__primary">Nathaniel Pereira</span>
                <span class="headertext headertext_secondary margin-bottom-small">Budding IT Generalist // Dad joke repository</span>  
        </section>
    );
}

export default Header;