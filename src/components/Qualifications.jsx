import { useState } from 'react'


const Qualifications = () =>
{
    let unselectedTab = "qualifications__tabs__items";
    let selectedTab = "qualifications__tabs__items qualifications__tabs__items--active";
    const [tabText, setTabText] = useState({content: `<div>Hello</div>`});
    const [workexpClassname, setwork] = useState(selectedTab);
    const [eduClassname, setedu] = useState(unselectedTab);
    const [hobbyClassname, sethobby] = useState(unselectedTab);
    const [accoladeClassname, setaccolade] = useState(unselectedTab);

    const mainHandler = (number) =>
    {
        classnameReset();
        switch(number)
        {
            case 1:
                setTabText(tabText.content);
                setwork(selectedTab);
                break;
            case 2:
                setTabText(tabText.content);
                setedu(selectedTab);
                break;
            case 3:
                setTabText(tabText.content);
                sethobby(selectedTab);
                break;
            case 4:
                setTabText(tabText.content);
                setaccolade(selectedTab);
                break;
            default:
                break;
        }
    }

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
                <div>
                <li class={workexpClassname} onClick={()=>mainHandler(1)}>Work Experience</li>
                </div>
                <div>
                <li class={eduClassname} onClick={()=>mainHandler(2)}>Education</li>
                </div>
                <div>
                <li class={hobbyClassname} onClick={()=>mainHandler(3)}>Hobbies</li>
                </div>
                <div>
                <li class={accoladeClassname} onClick={()=>mainHandler(4)}>Accolades</li>
                </div>
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