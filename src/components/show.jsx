import { Link } from "react-router-dom";

const Show = ({ show }) => {
  console.log(show.show.image);
  return (
    <>
      <div className="col-lg-2 m-3 p-4 show text-center">
        <img
          src={show.show.image !== null ? show.show.image.medium : "../assets/no-cover-image.jpg"}
          alt={show.show.name}
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
