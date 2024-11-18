import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  // console.log(params)
  const userId = params.id;

  useEffect(() => {
    async function fetchUserData() {
      await fetch(`http://localhost:4000/users/${userId}`)
        .then((resp) => resp.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error));
    }
    fetchUserData();
  }, [userId]);
  if (!user.name) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;
