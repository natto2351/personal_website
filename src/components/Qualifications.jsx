import Card from './Card'
import Button from './Button'

const Qualifications = () =>
{
    return(
        <section class="card-container" id="qualifications">
            <Card classname={"card-1"}>
            <Button class="btn btn--white" anchor= {'#modal'}>Education</Button>
            </Card>
            <Card classname={"card-2"}>
            <Button class="btn btn--white" anchor= {'#modal'}>Work Experience</Button>
            </Card>
            <Card classname={"card-3"}>
            <Button class="btn btn--white" anchor= {'#modal'}>Hobbies</Button>
            </Card>
        </section>
    );
}
export default Qualifications;