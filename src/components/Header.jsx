import group from './group-photo.png';
import './Header.scss';

function Header()
{
    return(
        <div>
            <img src={group} alt="harem" class= "headerImage"></img>
        </div>
    );
}

export default Header;