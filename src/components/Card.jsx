
 import icons from '../images/sprites.svg'

const Card = (props) =>
{
    return(
        <div class="card"> 
        <a class="card__item" href="#modal" onClick={props.onClick}>
            <svg class="card__icon">
                <use href={`${icons}#icon-${props.iconname}`}></use>
            </svg>
            <div class="card__text">{props.buttonName}</div>
            </a>
        </div>
    );
}

export default Card;