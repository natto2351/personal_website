import Card from './Card'
import Modal from './Modal'
import { useState } from 'react'



const Qualifications = () =>
{
    const [modaltest, setmodaltest] = useState({title:"Error.",
                                                content: "Text did not load correctly.",});
    const modalhandler = () =>
    {
        setmodaltest({  title:"Education",
                        content: 
                        <div>
                        <h5> 2017 to 2022</h5>
                        <p>BEng(Hons.)Computer Engineering: Singapore Institute of Technology</p>
                        <h5> 2012 to 2015</h5>
                        <p>Diploma in Information Technology, specialization in Information Security & Forensics: Ngee Ann Polytechnic</p>
                        </div>,
                        });
    }
    const modalhandler2 = () =>
    {
        setmodaltest({  title:"Work Experience",
                        content: <div>
                        <h5> May 2022 to Present</h5>
                        <p>MSI-Global Pte Ltd, Associate Consultant, Digital Mobility Solutions</p>
                        <h5> September 2020 to November 2021</h5>
                        <p>Research Engineer, Infocomm Technology Cluster, Singapore Institute of Technology</p>
                        <h5> May 2019 to December 2019</h5>
                        <p>Software Developer, Cartrack Technologies Southeast Asia Ltd</p>
                        <h5> May 2018 to August 2018</h5>
                        <p>Intern, Continental Automotive, Digital Security Department</p>
                        </div>,
                        });
    }
    const modalhandler3 = () =>
    {
        setmodaltest({  title:"Hobbies",
                        content: <div>
                        <h5>Final Fantasy 14 Online</h5>
                        <p>Avid player that uses the built-in photography tool to produce various works</p>
                        <h5>Tabletop Gaming</h5>
                        <p>Enjoyer of tabletop games such as Dungeons & Dragons, as well as an ex- Dungeon Master for the Pathfinder Society</p>
                        <h5>Pokemon</h5>
                        <p>ex- Tournament organizer and judge for the Pokemon Company International. Contributions to the scene gave me a chance to represent players
                             at the Australia International Championships in 2018</p>
                        </div>,
                        });
    }
    const modalhandler4 = () =>
    {
        setmodaltest({  title:"Accolades",
                        content: <div>
                        <h5>IEEE Journal submission</h5>
                        <p>Contributed to the journal which is currently undergoing publishing</p>
                        <h5>User Interface Design Award</h5>
                        <p>Went above and beyond in creating a project video to showcase UI design principles</p>
                        </div>,});
    }
    return(
        <section class="qualifications">
            <h1 class="qualifications__heading heading-1" id="qualifications"> Find Out More About Nathaniel</h1>
            <Card buttonName={"Education"} onClick = {modalhandler} iconname={"book-open"}></Card>
            <Card buttonName={"Work Experience"} onClick = {modalhandler2} iconname={"file-text"}></Card>
            <Card buttonName={"Hobbies"} onClick = {modalhandler3} iconname={"coffee"}></Card>
            <Card buttonName={"Accolades"} onClick = {modalhandler4} iconname={"edit-3"}></Card>
            <Modal title={modaltest.title} content={modaltest.content}></Modal>
        </section>
    );
}
export default Qualifications;