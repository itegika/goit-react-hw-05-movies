import { fetchTrends } from "../../API/API";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomeView() {
  const location = useLocation();
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends().then(setTrends);
  }, []);

  return (
    <>
      <h1>Trending movies</h1>

      <ul>
        {trends &&
          trends.map((trend) => (
            <li key={trend.id}>
              <Link
                to={{
                  pathname: `/movies/${trend.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {trend.original_title
                  ? trend.original_title
                  : trend.original_name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
