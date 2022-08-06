import "./view.scss";
import apple from "../../assets/images/apple-watch.png";
import { FilledStar } from "../../assets/icons";
import { BagAdd } from "../../assets/icons";
import { Back } from "../../assets/icons";
import Button from "../../common/button/button";
const View = () => {
  return (
    <div className="view">
      <span className="back">{Back} Back</span>
      <div className="item">
        <div className="img-box">
          <div className="img-container">
            <div className="image">
              <img src={apple} alt={apple} />
            </div>
            <div className="image">
              <img src={apple} alt={apple} />
            </div>
            <div className="image">
              <img src={apple} alt={apple} />
            </div>
          </div>
          <img src={apple} alt={apple} />
        </div>
        <div className="info">
          <h2 className="name">Apple Watch</h2>
          <span className="series">Series 5 SE</span>
          <div className="rate">
            <div className="starts">
              {FilledStar}
              {FilledStar}
              {FilledStar}
              {FilledStar}
              {FilledStar}
            </div>
            <span>5/5</span>
          </div>
          <span className="price">$ 529.99</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
            imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
            tincidunt lorem mi duis. Vitae elementum libero.
          </p>
        </div>
      </div>

      <div className="btn">
        <Button btnIcon={BagAdd} btnLabel="Add to Bag" />
      </div>

      <span className="line"></span>

      <div className="description">
        <span className="title">Description</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          odio faucibus nec malesuada purus volutpat vel sed viverra. Id
          sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus
          pellentesque sagittis. Felis rhoncus facilisis massa eget purus in
          purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque
          sit mattis in egestas neque. Eu porta tempor sodales nisl integer
          turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor
          diam quisque suspendisse. Orci vel ridiculus diam viverra. Libero
          malesuada orci, quis placerat suscipit augue imperdiet. Et praesent
          augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque
          massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam
          sit viverra enim. Id id placerat eu etiam nulla laoreet. Dignissim leo
          fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam
          justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin
          ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi
          sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur
          morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra
          hendrerit risus. Odio phasellus nibh senectus nec id enim quam sed. At
          potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et
          adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at
          facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam
          cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius
          risus eros.
        </p>
      </div>
    </div>
  );
};

export default View;
