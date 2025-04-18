import { CDN_URL } from "../utils/constants";
const RestuarentCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={CDN_URL + cloudinaryImageId} className="res-image"></img>
      <h3>{name}</h3>
      <h4>{`${cuisines.join(", ")}`}</h4>
      <h4>{avgRating} / 100</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestuarentCard;
