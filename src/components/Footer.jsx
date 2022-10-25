import Button from './Button'

const Footer = () =>
{
    return(
        <footer class="footer">
            <div class="links"> <Button class="btn btn--white" anchor= {'#modal'}>Additional Info</Button></div>
            <div class="copyright">Content created and owned by Nathaniel Pereira. All rights reserved.</div>
        </footer>
    );
}

export default Footer