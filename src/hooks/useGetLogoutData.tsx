import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetLogoutLogout = () => {
    const router = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const logout = async () => {
        try {
            setIsLoggingOut(true);
            await fetch(`${process.env.REACT_APP_LOGOUT_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            setIsLoggingOut(false);
            // Redirect the user to the login page after successful logout
            router('/login');
        } catch (error) {
            console.error('Error logging out:', error);
            setIsLoggingOut(false);
        }
    };

    return {
        isLoggingOut,
        logout,
    };
};

export default useGetLogoutLogout;
