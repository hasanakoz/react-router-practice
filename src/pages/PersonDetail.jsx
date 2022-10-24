import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          // setLoading(true)
          setError(true);
          throw new Error("Something Went Wrong");
        }
        return res.json();
      })
      .then((data) => {
        // setLoading(true)
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  const [person, setPerson] = useState("");

  //   const { state } = useLocation();
  //   console.log(state);

  if (error) {
    return <NotFound />;
  } else if (!person) {
    return (
      <div className="text-center">
        <h3>Data Loading</h3>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button onClick={() => navigate("/")}>Go Home</button>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
