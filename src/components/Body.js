import RestuarentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  // Local State Variable -Super powerful variable
  const [listOfRestaurants, setlistOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.447699&lng=78.40842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const dataResolved = await data.json();
      // throw new Error("Fecth call failed");
      const resDataFetchedFromAPI =
        dataResolved?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setlistOfRestaurents(resDataFetchedFromAPI);
    } catch (error) {
      console.error(error);
    }
  };

  // Conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top rated restuarents</button>
      </div>

      <div className="restro-container">
        {listOfRestaurants.map((restaurent) => (
          <RestuarentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

// const filter = document.querySelector(".filter-btn");

// filter.addEventListener("click", function () {
//   console.log("clicked");
// });

export default Body;
