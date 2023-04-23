import React from 'react'
import './Caraousel.css'
function Caraousel() {
  return (
   
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 img-car" src="https://www.france-justforyou.com/sites/default/files/resize/wysiwyg/louvre_pyramid_best_places_in_france_wonders_of_the_world-600x400.jpg" alt="First slide"/>
      </div>
      <div class="carousel-item ">
        <img class="d-block w-100 img-car" src="https://cdn.britannica.com/85/83885-050-9CDCFEA9/Notre-Dame-de-Paris-France.jpg" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-car" src="https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg" alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
   
  )
}

export default Caraousel
