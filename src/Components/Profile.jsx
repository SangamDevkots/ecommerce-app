import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [alertVisible, setAlertVisible] = useState(true);

  const saveUserDataToLocalStorage = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const getUserDataFromLocalStorage = () => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  };

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
     
      saveUserDataToLocalStorage(user);
    }
  }, [user, isAuthenticated, isLoading]);

  useEffect(() => {
 
    const userData = getUserDataFromLocalStorage();

    if (userData) {
 
      console.log("User data from local storage:", userData);
    }
  }, []);

  const closeAlert = () => {
    setAlertVisible(false);
  };
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {alertVisible && !isAuthenticated && (
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md flex" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold">Suggesting Logged in</p>
              <p class="text-sm">Please log in to the website.</p>

              <button className="mx-2" onClick={() => loginWithRedirect()}>Login now</button>
              <button className="close-btn underline text-red" onClick={closeAlert}>
                or Not interested
              </button>
            </div>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div class="flex items-center ">
          <img src={user.picture} alt="User Icon" class="w-8 h-8" />
          <span class="ml-2">   <h2>Welcome to my ecommerce, {user.name}!</h2></span>
        </div>
      )}
    </>
  );
};

export default Profile;
