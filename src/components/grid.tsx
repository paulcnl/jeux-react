import "./grid.css";
import sorciere from "../sorciere.png";
import fantom from "../fantom.png";
import zombie from "../zombie.png";
import vampire from "../vampire.png";
import dents from "../dents.png";

function Grid() {
  return (
    <>
      <div className="titre">
        <h3>Catégories :</h3>
      </div>
      <div className="image-container">
        <article className="sorciere">
          <p>sorciere</p>
          <img src={sorciere} alt="" />
        </article>

        <article className="vampire">
          <p>fantome</p>
          <img src={fantom} alt="" />
        </article>

        <article className="zombie">
          <p>zombie</p>
          <img src={zombie} alt="" />
        </article>

        <article className="fantome">
          <p>vampire</p>
          <div className="fantome-img">
            <img src={vampire} alt="" />
            <img src={dents} alt="" />
          </div>
        </article>
      </div>
    </>
  );
}

export default Grid;
