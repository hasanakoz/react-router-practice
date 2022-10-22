import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const { state } = useLocation();
  console.log(state);
  return (
    // <div>person</div>
    <div className="container text-center">
      <h3>
        {state.first_name} {state.last_name}
      </h3>
      <img className="rounded" src={state.avatar} alt="" />
      <p>{state.email}</p>
      <div>
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default PersonDetail;
