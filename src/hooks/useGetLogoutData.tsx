import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetLogoutLogout = () => {
  const router = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

<<<<<<< HEAD
    const logout = async () => {
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
=======
  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      localStorage.removeItem("product_id");
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e

      setIsLoggingOut(true);

<<<<<<< HEAD
            // const response = await fetch(`${process.env.REACT_APP_LOGOUT_URL}`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     credentials: 'include',
            // });

            // if (response.ok) {
            router("/login");
            // } else {
            //     console.error('Logout failed:', response);
            // }
            setIsLoggingOut(false);
        } catch (error) {
            console.error("Logout error:", error);
            setIsLoggingOut(false);
        }
    };
=======
      // const response = await fetch(`${process.env.REACT_APP_LOGOUT_URL}`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     credentials: 'include',
      // });

      // if (response.ok) {
      router("/login");
      // } else {
      //     console.error('Logout failed:', response);
      // }
      setIsLoggingOut(false);
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
    }
  };
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e

  return {
    isLoggingOut,
    logout,
  };
};

export default useGetLogoutLogout;