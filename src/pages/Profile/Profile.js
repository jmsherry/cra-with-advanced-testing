import React from 'react';
import ProfileDisplay from './../../components/ProfileDisplay/ProfileDisplay';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function ProfilePage() {
  const { user } = useAuth0();
  console.log('user', user);
  return (
    <div>
      <ProfileDisplay user={user} />
    </div>
  )
}

export default withAuthenticationRequired(ProfilePage, {
  onRedirecting: () => <p>Loading</p>,
});
