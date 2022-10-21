import React from 'react';


const Button = props =>
{
    return(
    <a href={props.anchor} class={props.class} onClick={props.onClick}> {props.children}</a>
    );
}

export default Button;