import React from "react";
import Img from "../Assets/images/Img.png";
import Img1 from "../Assets/images/Img1.png";
import Img2 from "../Assets/images/Img2.png";
import Img3 from "../Assets/images/Img3.png";
import Img68 from "../Assets/images/Img68.png";
import Img69 from "../Assets/images/Img69.png";
import Img70 from "../Assets/images/Img70.png";
import Img71 from "../Assets/images/Img71.png";
import Img72 from "../Assets/images/Img72.png";
import Img73 from "../Assets/images/Img73.png";
import Img74 from "../Assets/images/Img74.png";
import Img75 from "../Assets/images/Img75.png";
import Img76 from "../Assets/images/Img76.png";
import Img77 from "../Assets/images/Img77.png";
import Img78 from "../Assets/images/Img77.png";
import { scrollbar } from "../Assets/js/custom.js";
export default function Gallery() {
  function moveHandle() {
    scrollbar();
  }
  return (
    <div className="middle-section">
      <div className="gallery-container">
        {/* <div id="scroll-handle"></div> */}
        <div className="gallery" id="gallery" onScroll={moveHandle}>
          <img src={Img} />
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img68} />
          
          {/* <img src={Img3} />
          <img src={Img69} />
          <img src={Img70} />
          <img src={Img71} />
          <img src={Img72} />
          <img src={Img73} />
          <img src={Img74} />
          <img src={Img75} />
          <img src={Img76} />
          <img src={Img77} />
          <img src={Img78} />
          <img src={Img} /> */}
        </div>
      </div>
    </div>
  );
}
