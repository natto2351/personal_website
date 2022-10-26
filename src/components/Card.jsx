
const Card = (props) =>
{
    //return(
    //    <div class={props.classname}>{setText(props.buttonName)}
    //    <Button class="btn btn--grey" anchor={"#modal"} onClick={props.onClick}> {props.buttonName} </Button>
    //    </div>
    //);
    return(
        <a class={props.classname} href="#modal" onClick={props.onClick}> {props.buttonName}</a>
    );
}

export default Card;