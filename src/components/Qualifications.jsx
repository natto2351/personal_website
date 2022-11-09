import { useState } from 'react'


const Qualifications = () =>
{
    const [tabText, setTabText] = useState("Error: Text did not load in correctly.");
    const [workexpClassname, setwork] = useState("qualifications__tabs__items");
    const [eduClassname, setedu] = useState("qualifications__tabs__items");
    const [hobbyClassname, sethobby] = useState("qualifications__tabs__items");
    const [accoladeClassname, setaccolade] = useState("qualifications__tabs__items");

const handler1 = () => 
    {
        classnameReset();
        setTabText("1");
        setwork("qualifications__tabs__items qualifications__tabs__items--active");
    };
    const handler2 = () => 
    {
        classnameReset();
        setTabText("2");
        setedu("qualifications__tabs__items qualifications__tabs__items--active");
    };
    const handler3 = () => 
    {
        classnameReset();
        setTabText("3");
        sethobby("qualifications__tabs__items qualifications__tabs__items--active");
    };
    const handler4 = () => 
    {
        classnameReset();
        setTabText("4");
        setaccolade("qualifications__tabs__items qualifications__tabs__items--active");
    };

 const classnameReset = () =>
 {
    setwork("qualifications__tabs__items");
    setedu("qualifications__tabs__items");
    sethobby("qualifications__tabs__items");
    setaccolade("qualifications__tabs__items");
 }
    return(
        <section class="qualifications">
            <div class="heading-1">My Journey</div>
            <ol class="qualifications__tabs">
                <li class={workexpClassname} onClick={handler1}>Work Experience</li>
                <li class={eduClassname} onClick={handler2}>Education</li>
                <li class={hobbyClassname} onClick={handler3}>Hobbies</li>
                <li class={accoladeClassname} onClick={handler4}>Accolades</li>
            </ol>
            <section class="qualifications__details">
                {tabText}
            </section>
        </section>
    );
}
export default Qualifications;

/*const Thisonefails = () =>
{
    const[test,setTest]=useState("initial");

    const texthandler = (incoming) =>
    {
        switch (incoming)
        {
            case 1:
                setTest("Hello");
                break;
            case 2:
                setTest("Goodbye");
                break;
            default:
                setTest("Error");
                break;
        }
    };
    return(
        <div>
                <div class="qualifications__tabs__items" onClick={texthandler(1)}>1</div>
                <div class="qualifications__tabs__items" onClick={texthandler(2)}>2</div>
                <div>{test}</div>
        </div>
    );
}
*/