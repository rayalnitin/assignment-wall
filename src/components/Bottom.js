import "./Right.css";
import {FaSort} from 'react-icons/fa';

const data2 = [
  {
    head: "Azuki #9839",
    img: "./images/img1.png",
  },
  {
    head: "MAYC #9839",
    img: "./images/img2.png",
  },
  {
    head: "MoonBirds #9839",
    img: "./images/img3.png",
  },
  {
    head: "Otherdeed #9839",
    img: "./images/img4.png",
  },
  {
    head: "Cryptoz #9839",
    img: "./images/img5.png",
  },
];
function Bottom() {
  return (
    <div className="up">
      {data2.map((da) => (
        <div className="block">
          <div className="time">3 months</div>
          <img className="img2" src={da.img} alt="" />
          <div className="name">{da.head}</div>
          <div className="first">
            <div className="bought">Bought</div>
            <div className="range">02.44 <FaSort/></div>
          </div>
          <div className="second">
            <div className="bought">Floor</div>
            <div className="sub">
              <div className="range">12.74 <FaSort/></div>
              <div className="point">+23%</div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Bottom;
