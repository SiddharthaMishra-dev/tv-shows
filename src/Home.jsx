import Show from "./components/show";
import { useEffect, useState } from "react";

function Home() {
  const [series, setSeries] = useState([]);
  const getApi = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        const result = await response.json();
        setSeries(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="p-3">
      <h1 className="fs-1 text-center fw-bold">RELAXIFY</h1>
      <div className="row p-4">
        {series.map((show) => {
          return (
            <Show
              key={show.show.id}
              show={show}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
