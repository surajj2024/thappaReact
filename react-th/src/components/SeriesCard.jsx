const SeriesCard = ({ item }) => {
  const { id, img_url, name, rating, description, genre, watch_url } = item;
  return (
    <li key={id}>
      <div>
        <img src={img_url} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Desc: {description}</p>
      <p>Genre: {genre}</p>

      <a href={watch_url} target="_blank">
        <button> Watch Now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
