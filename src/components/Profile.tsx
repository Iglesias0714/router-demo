import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate

import DefaultProfile from "./DefaultProfile";
import Luigi from "./Luigi";
import Mario from "./Mario";

function Profile() {
  const { name } = useParams();
  const navigate = useNavigate(); // Obtiene la función de navegación

  return (
    <div>
      <h1>Profile page!</h1>
      <p>Something Else..</p>
      {name === "Mario" && <Mario />}
      {name === "Luigi" && <Luigi />}
      {name !== "Mario" && name !== "Luigi" && <p>No profile found</p>}
      <button onClick={() => navigate("/")}>Go to main page</button> {/* Agrega un botón para navegar */}
    </div>
  );
}

export default Profile;
