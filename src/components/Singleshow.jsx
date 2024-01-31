import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import noCoverImage from "../assets/no-cover-image.jpg";

const Singleshow = () => {
  const { showId } = useParams();
  const [object, setObject] = useState({});
  const [summary, setSummary] = useState("");
  const getSummary = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        const result = await response.json();
        setObject(result);
        setSummary(result["summary"]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(object);
  useEffect(() => {
    getSummary();
  }, []);

  return (
    <div className="container mt-5 p-3 text-center d-flex flex-column">
      <h1>{object.name}</h1>
      <img
        src={object.image !== undefined ? object.image.original : noCoverImage}
        alt={object.name}
        className="mb-3  m-auto"
        style={{
          width: "100%",
          maxWidth: "450px",
        }}
      />
      <p className="fs-5">{summary.replace(/(<([^>]+)>)/gi, "")}</p>
      <p>
        <span className="fw-bold">Language - </span>
        {object.language}
      </p>
      <p>
        <span className="fw-bold">Started on - </span>
        {object.premiered}
      </p>
      <p>
        <span className="fw-bold">Ended on - </span>
        {object.ended}
      </p>
      <p>
        {/* {object.genres ?
        (<span className="fw-bold">Genres - </span>
       ( object.genres.map((genre) => <span>{ genre}</span>))
        )

        : null} */}
        {object.genres ? (
          <>
            <span className="fw-bold">Genres - </span>
            {object.genres.map((genre, index) => (
              <span key={index}>
                {genre}
                {index < object.genres.length - 1 ? ", " : ""}
              </span>
            ))}
          </>
        ) : null}
      </p>
      <p>
        <span className="fw-bold">Country - </span>
        {object.network.country !== undefined ? object.network.country.name : null}
      </p>
      <button
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#reservation"
      >
        Reserve a seat
      </button>
      <div
        className="modal fade"
        id="reservation"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content center">
            <div className="modal-header">
              <h3 className="modal-title f-5">Book a seat</h3>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input type="date" />
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="1"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="2"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="3"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="4"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="5"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="6"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="7"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="8"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="1"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="2"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="3"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="4"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="5"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="6"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="7"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="8"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="1"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="2"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="3"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="4"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="5"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="6"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="7"
                  />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="8"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleshow;
