import "./Left.css";
const data3 = [
  {
    img: "./images/img6.png",
  },
  {
    img: "./images/img7.png",
  },
  {
    img: "./images/img8.png",
  },
  {
    img: "./images/img9.png",
  },
];

const data4 = [
  {
    percent: "PFP",
  },
  {
    percent: "Metaverse",
  },
  {
    percent: "Gaming",
  },
  {
    percent: "PFP",
  },
  {
    percent: "ens",
  },
];
function Left() {
  return (
    <div className="left">
      <div className="part1">
        <div className="row1">
          <img src="images/img.png" alt="" className="logo" />
          <img src="images/ellipse.png" alt="" className="ellipse" />
          <img src="images/ellipse2.png" alt="" className="ellipse" />
          <div className="yel"></div>
          <div className="profile">
            <div className="lvl">LVL 2</div>
            <div className="name">dingaling.eth</div>
            <div className="desc">Oxadgf....jkld</div>
          </div>
        </div>

        <div className="row2">
          <div className="account">
            <img src="images/vector.png" alt="" className="twitter" />
            <div className="name">@dingalingts</div>
          </div>
          <div className="global">
            <img src="images/vector3.png" alt="" className="global3"/>
              <img src="images/vector1.png" alt="" className="global1" />
             <img src="images/vector2.png" alt="" className="global2"/>
            <img />
          </div>
        </div>

        <div className="row3">
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </div>
      </div>
      <div className="part1">
        <div className="row4">Common communities (3)</div>
        <div className="row5">
          {data3.map((da) => (
            <img src={da.img} alt="" className="comm_img" />
          ))}
        </div>

        <div className="row6">
          <div className="sub_row">Art 12%</div>
          <div className="sub_row">Utility 12%</div>
          {data4.map((da) => (
            <div className="sub_row  sub_color">{da.percent} 12%</div>
          ))}
        </div>

        <button>Subscribe 
          <div>
             <img src="images/arrow.png" alt="" className="arrow" />
          <img src="images/arrow.png" alt="" className="arrow" /> 
          </div>
         
        </button>
      </div>
    </div>
  );
}

export default Left;
