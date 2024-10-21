import React from "react";
import Slider from "react-slick";
import '../slider/slider.css'

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita o autoplay
    autoplaySpeed: 3000, // Tempo em milissegundos entre as transiçõe
  };
  return (
    <Slider {...settings}>
      <div>
      <img classname="imageSlider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFN_DdMrEXKC3yLC6QS9EFqTpEykzX-rokQ&s" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFN_DdMrEXKC3yLC6QS9EFqTpEykzX-rokQ&s" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFN_DdMrEXKC3yLC6QS9EFqTpEykzX-rokQ&s" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFN_DdMrEXKC3yLC6QS9EFqTpEykzX-rokQ&s" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFN_DdMrEXKC3yLC6QS9EFqTpEykzX-rokQ&s" alt="" />
      </div>
      <div>
      <img classname="imageSlider" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFN_DdMrEXKC3yLC6QS9EFqTpEykzX-rokQ&s" alt="" />
      </div>
    </Slider>
  );
}