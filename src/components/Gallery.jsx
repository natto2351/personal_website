import pic1 from '../images/stn-land-1.jpg'
import pic2 from '../images/stn-portrait-1.jpg'
import pic3 from '../images/t-stn-portrait-1.jpg'
import pic4 from '../images/t-land-1.jpg'
import pic5 from '../images/t-stn-portrait-3.jpg'
const Gallery = () =>
{
    return(
        <div class="gallery" id="gallery">
            <h1 class=" gallery__text heading-1"> Photo Album</h1>
            <img class="gallery__image gallery__image-1" src ={pic1} alt="train"></img>
            <img class="gallery__image gallery__image-2" src ={pic2} alt="train"></img>
            <img class="gallery__image gallery__image-3" src ={pic3} alt="train"></img>
            <img class="gallery__image gallery__image-4" src ={pic4} alt="train"></img>
            <img class="gallery__image gallery__image-5" src ={pic5} alt="train"></img>
        </div>
    );
}

export default Gallery;