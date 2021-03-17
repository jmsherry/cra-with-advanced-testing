import React from "react";

function ProfileDisplay({ user: { name, picture } }) {
  return (
    <div>
      <h1>Profile</h1>
      <div className="container">
        <img
          className="avatar"
          src={picture}
          alt={name}
        />
        <dl>
          <dt>Name:</dt>
          <dd>
            {name}
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default ProfileDisplay;
