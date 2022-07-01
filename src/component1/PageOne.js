import React from "react";
import image1 from "../images/santorini.jpeg";
import image2 from "../images/korea.webp";
import image3 from "../images/Swz.jpg";
import image4 from "../images/paris.jpeg";
import image5 from "../images/bali.jpg";
import image7 from "../images/hk.jpg";
import image8 from "../images/japan.jpg";
import image9 from "../images/TH.jpg";

function PageOne() {
  return (
    <div className="pageOne">
      <div>
        <h1>Where to travel in 2022 ??</h1>

        <div className="row">
          <div className="card">
            <img src={image1} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Greece</b>
              </h4>
              <p>Santorini </p>
            </div>
            <a
              href="https://www.chanbrothers.com/private-tours/itinerary/athens-and-mainland-greece"
              target="_blank"
            >
              find out more
            </a>
          </div>
          <div className="card">
            <img src={image2} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Korea</b>
              </h4>
              <p>... </p>
            </div>
            <a
              href="https://www.chanbrothers.com/package-tours/korea-best-sellers"
              target="_blank"
            >
              find out more
            </a>
          </div>
          <div className="card">
            <img src={image3} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Switzerland</b>
              </h4>
              <p> </p>
            </div>
            <a
              href="https://www.mynetbizz.com/pages/switzerland/switzerland-packages.cfm"
              target="_blank"
            >
              find out more
            </a>
          </div>

          <div className="card">
            <img src={image4} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Paris</b>
              </h4>
            </div>
            <a
              href="https://www.chanbrothers.com/private-tours/itinerary/paris"
              target="_blank"
            >
              find out more
            </a>
          </div>
          <div className="card">
            <img src={image5} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Indonesia</b>
              </h4>
            </div>
            <a
              href="https://www.mynetbizz.com/pages/indonesia/indonesia-packages.cfm"
              target="_blank"
            >
              find out more
            </a>
          </div>
          <div className="card">
            <img src={image7} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>HongKong</b>
              </h4>
            </div>
            <a
              href="https://www.mynetbizz.com/pages/hong-kong/3days-hong-kong-disneyland-package.cfm"
              target="_blank"
            >
              find out more
            </a>
          </div>
          <div className="card">
            <img src={image9} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Thailand</b>
              </h4>
            </div>
            <a
              href="https://www.chanbrothers.com/private-tours/itinerary/paris"
              target="_blank"
            >
              find out more
            </a>
          </div>
          <div className="card">
            <img src={image8} alt="Avatar" />
            <div className="container1">
              <h4>
                <b>Japan</b>
              </h4>
            </div>
            <a
              href="https://www.mynetbizz.com/pages/japan/japan-packages.cfm"
              target="_blank"
            >
              find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageOne;

{
  /* <ul>
          <li>
            <Link to="./page-one/a">Details of A</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="./page-two/a">Details of B</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="./page-three/a">Details of C</Link>
          </li>
        </ul> */
}
