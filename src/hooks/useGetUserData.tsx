import { useEffect, useState } from "react";
import axios from "axios";

import { getTokenAuth } from "../helper/helper";

const useGetUserData = () => {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = async (accessToken: string) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_NEST_URL}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                },
                withCredentials: true,
            });
            console.log(await response.data);
            setEmail(response.data.email);
            setIsLoggedIn(true);
            setIsFetchingData(false);
        } catch (error) {
            console.error('Error:', error);
            setIsFetchingData(false);
        }
    };

    useEffect(() => {
        const accessToken = getTokenAuth();
        if (accessToken) {
            fetchUserData(accessToken);
        } else {
            setIsFetchingData(false);
        }
        console.info("logged ", isLoggedIn)
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [!isLoggedIn]);

    return {
        email,
        setEmail,
        isFetchingData,
        isLoggedIn,
        isLoading
    };
}

export default useGetUserData;
