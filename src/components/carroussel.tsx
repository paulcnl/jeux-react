import "./grid.css";
import "./carroussel.css";

function Carroussel() {
  return (
    <>
      <div className="titre">
        <h3>Promotions :</h3>
      </div>
      <div className="carroussel">
        <div className="carroussel-container">
          <div className="article-carroussel">
            <h2>Nos citrouilles</h2>
            <img
              src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:358,width:688/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/22IQTrWcRmmJU5nWdkrT"
              alt=""
            />
          </div>
          <div className="article-carroussel">
            <h2>Nos costumes adultes</h2>
            <img
              src="https://inst-1.cdn.shockers.de/hs_cdn/out/pictures/generated/category/icon/660_380_100/vampir-kostueme-icon--horrorshopcom.jpg"
              alt=""
            />
          </div>
          <div className="article-carroussel">
            <h2>Nos accessoirs</h2>
            <img
              src="https://wrench.com/blog/content/images/2020/10/halloweencar-1.jpg"
              alt=""
            />
          </div>
          <div className="article-carroussel">
            <h2>Nos costumes enfants</h2>
            <img
              src="https://d6jxw97mfkke7.cloudfront.net/windjammer-landing.com-1949902994/cms/cache/v2/6512e2683371a.jpg/1920x1080/fit/80/822081199954346a0a8b99f743e289d8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carroussel;
