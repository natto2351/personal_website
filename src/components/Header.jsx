import Button from './Button';

const Header = (props) =>
{
    return(
        <div class="headerImage">
            <div class="center-box">
                <span class="headertext headertext__primary">Nathaniel</span>
                <span class="headertext headertext__secondary margin-bottom-small">something something</span>
                <Button class="btn btn--white" onClick={props.onConfirm}>Click</Button>
            </div>
            
        </div>
    );
}

export default Header;