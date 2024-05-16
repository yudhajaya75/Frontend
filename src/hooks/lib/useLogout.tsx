import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetLogout = () => {
<<<<<<< HEAD
    const router = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const logout = async () => {
        setIsLoggingOut(true);

        // Send a request to the logout endpoint

        // Clear the JWT token from local storage
        localStorage.removeItem("token");
        router("/login");

        // Redirect to the login page

        setIsLoggingOut(false);
    };

    return {
        isLoggingOut,
        logout,
    };
=======
  const router = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logout = async () => {
    setIsLoggingOut(true);

    // Send a request to the logout endpoint

    // Clear the JWT token from local storage
    localStorage.removeItem("token");
    router("/login");

    // Redirect to the login page

    setIsLoggingOut(false);
  };

  return {
    isLoggingOut,
    logout,
  };
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
};

export default useGetLogout;