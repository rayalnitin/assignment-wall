import "./Right.css";
import {FaSort} from 'react-icons/fa';

const data1 = [
  {
    head1: "ENS Linked",
    head2: "ENS Linked",
    name: "dingaling.eth",
    range: 1.82,
    dur: "2 months ago",
    point: "+200XP",
    img: "./images/rect.png",
  },
  {
    head1: "Best Flip",
    head2: "Sold",
    name: "CryptoPunk #2131",
    range: 98.5,
    dur: "10 days ago",
    point: "+150XP",
    img: "./images/rect1.png",
  },
  {
    head1: "Should have...",
    head2: "Mint",
    name: "Rare Apepe #6974",
    range: 98.5,
    dur: "10 days ago",
    point: "+200XP",
    img: "./images/rect2.png",
  },
  {
    head1: "First NFT bought",
    head2: "Bought",
    name: "BAYC #7925",
    range: 98.5,
    dur: "10 days ago",
    point: "+10XP",
    img: "./images/rect3.png",
  },
  {
    head1: "Paper Handed",
    head2: "Sold",
    name: "Moonbird #7866",
    range: 98.5,
    dur: "10 days ago",
    point: "+200XP",
    img: "./images/rect4.png",
  },
];

function Up() {
  return (
    <div className="up">
      {data1.map((da) => (
        <div className="box">
          <div className="upper">
            <img src={da.img} alt="img1" className="img" />
            <div className="texts">
              <div className="text1">{da.head1}</div>
              <div className="text2">{da.head2}</div>
            </div>
          </div>
          <div className="middle">
            <div className="name">{da.name}</div>
            <div className="range">{da.range}<FaSort/></div>

          </div>
          <div className="lower">
            <div className="dur">{da.dur}</div>
            <div className="point">{da.point}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Up;
