import icons from '../images/sprites.svg'

const Contact = () =>
{
    return(
        <div class="contact" id="contact">
            <div class="contact__header heading-1 margin-bottom-small">Contact Nathaniel</div>
            <div class="contact__container">
                <svg class="contact__icon">
                <use href={`${icons}#icon-phone-call`}></use>
                </svg>
                <div class="contact__text"> +65 9170 1061</div>
                
            </div>
            <div class="contact__container">
                <svg class="contact__icon">
                <use href={`${icons}#icon-github`}></use>
                </svg>
                <div class="contact__text"> natto2351</div>
            </div>
            <div class="contact__container">
                <svg class="contact__icon">
                <use href={`${icons}#icon-at-sign`}></use>
                </svg>
                <div class="contact__text"> nathanielpereira95@gmail.com</div>
            </div>
            <div class="contact__container">
                <svg class="contact__icon">
                <use href={`${icons}#icon-linkedin`}></use>
                </svg>
                <div class="contact__text">Nathaniel J. Pereira</div>
            </div>
        </div>
    );
}
export default Contact;