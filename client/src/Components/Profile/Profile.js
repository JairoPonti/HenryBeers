import React from "react";
import "./Profile.css";

const Profile = () => {
  var now = new Date().toLocaleTimeString();
  setTimeout(now, 1000);

  return (
    <div className="divadmin" style={{marginTop:"50px"}} >
      <h1 className="h1adm"> Hola Admin!</h1>
      <h2 className="h2adm">La hora es: {now}</h2>
    </div>
  );
};

export default Profile;
//setTimeout(function, milliseconds, param1, param2, ...)
