import React from 'react';
import BottomToTop1 from '../assets/Gallery/BottomToTopViewMainBuilding.jpg';
import BottomToTop2 from '../assets/Gallery/BottomToTopViewMainBuilding2.jpg';
import FullFrontView from '../assets/Gallery/FullFrontView.jpg';
import BottomToTop3 from '../assets/Gallery/BottomToTopViewMainBuilding3.jpg';
import GroundExpanded from '../assets/Gallery/GroundExpanded.jpg';
import GroundExpanded2 from '../assets/Gallery/GroundExpanded2.jpg';
import GroundWithNets from '../assets/Gallery/GroundWithNets.jpg';
import SideCloseUp from '../assets/Gallery/SideCloseUpFromGate.jpg';
import Carousel from './Carousel';

const images = [
  BottomToTop1,
  BottomToTop2,
  FullFrontView,
  BottomToTop3,
  GroundExpanded,
  GroundExpanded2,
  GroundWithNets,
  SideCloseUp,
];

const Gallery = () => {
  return (
    <div id="gallery">
      <h2 className="text-3xl font-extrabold text-center my-5 text-gray-900">Gallery</h2>
      <Carousel images={images} />
    </div>
  );
}

export default Gallery;
