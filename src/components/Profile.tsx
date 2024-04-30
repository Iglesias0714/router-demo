import { useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Luigi from "./Luigi";
import Mario from "./Mario";

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Profile page!</h1>
      <p>Something Else..</p>
      {name === "Mario" && <Mario />}
      {name === "Luigi" && <Luigi />}
      {name !== "Mario" && name !== "Luigi" && <p>No profile found</p>}
    </div>
  );
}

export default Profile;
