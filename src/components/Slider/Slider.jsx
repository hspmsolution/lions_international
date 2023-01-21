import ImageSlider, { Slide } from "react-auto-image-slider";
import saibaba_baner_3_center from "./img/saibaba_baner_3_center.jpg";
import lions_international_baner_1_resize from "./img/lions_international_baner_1_resize.jpg";
import godavari_baner_4_center from "./img/godavari_baner_4_center.jpg";
import shaniwarwada_baner_2_center from "./img/shaniwarwada_baner_2_center.jpg";
import './slider.css'


function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img1" src={saibaba_baner_3_center} />
      </Slide>
      <Slide>
        <img alt="img2" src={lions_international_baner_1_resize} />
      </Slide>
      <Slide>
        <img alt="img3" src={godavari_baner_4_center} />
      </Slide>
      <Slide>
        <img alt="img4" src={shaniwarwada_baner_2_center} />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;



// const images = [
//     saibaba_baner_3_center,
//     lions_international_baner_1_resize,
//     godavari_baner_4_center,
//     shaniwarwada_baner_2_center
// ];  