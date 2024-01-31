import { Link } from "react-router-dom";
import noCoverImage from "../assets/no-cover-image.jpg";

const Show = ({ show }) => {
  return (
    <>
      <div className="col-lg-2 m-3 p-4 show text-center">
        <img
          src={show.show.image !== null ? show.show.image.medium : noCoverImage}
          alt={show.show.name}
          className="image"
        />
        <h2>{show.show.name}</h2>
        <p>{show.show.status}</p>
        <p>{show.show.language}</p>
        <button className="btn btn-primary">
          <Link to={`/show/${show.show.id}`}>Summary</Link>
        </button>
      </div>
    </>
  );
};
export default Show;
