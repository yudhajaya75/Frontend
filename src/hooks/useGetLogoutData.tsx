import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetLogoutLogout = () => {
    const router = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const logout = async () => {
        try {
            // Hapus token dari local storage sebelum melakukan request logout ke server
            localStorage.removeItem('token');

            setIsLoggingOut(true);

            // Request logout ke server menggunakan fetch API
            const response = await fetch(`${process.env.REACT_APP_LOGOUT_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });

            if (response.ok) {
                // Redirect ke halaman login
                router('/login');
            } else {
                // Proses logout gagal, lakukan penanganan error sesuai kebutuhan
                console.error('Logout failed:', response);
            }
            setIsLoggingOut(false);
        } catch (error) {
            console.error('Logout error:', error);
            setIsLoggingOut(false);
        }
    };

    return {
        isLoggingOut,
        logout,
    };
};

export default useGetLogoutLogout;
