import React from "react";

function ProfileDisplay({ user: { firstName, lastName, avatar_url } }) {
  return (
    <div>
      <h1>Profile</h1>
      <div className="container">
        <img
          className="avatar"
          src={avatar_url}
          alt={`${firstName} ${lastName}`}
        />
        <dl>
          <dt>Name:</dt>
          <dd>
            {firstName} {lastName}
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default ProfileDisplay;
