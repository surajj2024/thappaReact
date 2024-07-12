import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((item) => {
        return <SeriesCard item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default NetflixSeries;
