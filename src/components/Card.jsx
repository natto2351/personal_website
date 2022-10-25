const Card = (props) =>
{
    return(
        <div class={props.classname}>{props.children}</div>
    );
}

export default Card;