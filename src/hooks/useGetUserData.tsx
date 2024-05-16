import { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios";
import { handlerApi } from "../services/handlerApi";

// import { getTokenAuth } from "../helper/helper";

const useGetUserData = () => {
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    //   const fetchData = async () => {
    //     try {
    //       const res = await handlerApi("/users");
    //       setEmail(res.email);
    //       setIsLoggedIn(true);
    //       setIsFetchingData(false);
    //     } catch (error) {
    //       console.error("Error:", error);
    //       setIsFetchingData(false);
    //     }
    //   };

    const fetchUserData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/users`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
                    },
                    withCredentials: true,
                }
            );
            //   console.log(await response.data);
            setEmail(response.data.email);
            setIsLoggedIn(true);
            setIsFetchingData(false);
        } catch (error) {
            console.error("Error:", error);
            setIsFetchingData(false);
        }
    };

    useEffect(() => {
        fetchUserData();
        // fetchData();
    }, []);

    console.log(email);

    //   useEffect(() => {
    //     const accessToken = getTokenAuth();
    //     if (accessToken) {
    //       fetchUserData(accessToken);
    //     } else {
    //       setIsFetchingData(false);
    //     }
    //     console.info("logged ", isLoggedIn);
    //     const loadingTimer = setTimeout(() => {
    //       setIsLoading(false);
    //     }, 2000);
    //   }, [!isLoggedIn]);

    return {
        email,
        setEmail,
        isFetchingData,
        isLoggedIn,
        isLoading,
    };
=======
import { HTTPAruna } from "../services/handlerApi";

const useGetUserData = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await HTTPAruna.get(`api/users`);
      setEmail(response.data.email);
      setIsLoading(false);
      setIsLoggedIn(true);
      setIsFetchingData(false);
    } catch (error) {
      console.error("Error:", error);
      setIsFetchingData(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return {
    email,
    setEmail,
    isFetchingData,
    isLoggedIn,
    isLoading,
  };
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
};

export default useGetUserData;