import Card from './Card'
import Modal from './Modal'
import { useState } from 'react'




const Qualifications = () =>
{
    const [modaltest, setmodaltest] = useState({title:"Error.",
                                                content: "lorem ipsum gibberish",});
    const modalhandler = () =>
    {
        setmodaltest({  title:"Education",
                        content: "I am smart boi i go school learn many thing.I am smart boi i go school learn many thing.I am smart boi i go school learn many thing" +
                        "I am smart boi i go school learn many thing.I am smart boi i go school learn many thing.I am smart boi i go school learn many thing.I am s" +
                        "mart boi i go school learn many thing.I am smart boi i go school learn many thing.I am smart boi i go school learn many thing.I am smart boi" +
                        " i go school learn many thing.I am smart boi i go school learn many thing.I am smart boi i go school learn many thing.I am smart boi i go school" +
                        " learn many thing.I am smart boi i go school learn many thing.",});
    }
    const modalhandler2 = () =>
    {
        setmodaltest({  title:"Work Experience",
                        content: "I love MSI i learn many thing here also",});
    }
    const modalhandler3 = () =>
    {
        setmodaltest({  title:"Hobbies",
                        content: "I like computer gaem",});
    }
    const modalhandler4 = () =>
    {
        setmodaltest({  title:"Accolades",
                        content: "I have many award heehoo",});
    }
    return(
        <section class="qualifications" id="qualifications">
            <Card classname={"card card-1"} buttonName={"Education"} onClick = {modalhandler}>
            </Card>
            <Card classname={"card card-2"} buttonName={"Work Experience"} onClick = {modalhandler2}>
            </Card>
            <Card classname={"card card-3"} buttonName={"Hobbies"} onClick = {modalhandler3}>
            </Card>
            <Card classname={"card card-4"} buttonName={"Accolades"} onClick = {modalhandler4}></Card>
            <Modal title={modaltest.title} content={modaltest.content}></Modal>
        </section>
    );
}
export default Qualifications;