import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div class="w-16 h-16 rounded-full overflow-hidden">
  <img src={user.picture} alt={user.name}/> 
</div>

        <img  /> 
       <h2> welcome to my ecommerce <br /> {user.name}</h2>

      </div>
      
      
    )
  );
};

export default Profile;