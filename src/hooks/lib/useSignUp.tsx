import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const useGetRegisterData = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    setRedirect(true);
  };

  return {
    email,
    setEmail,
    password,
    setUsername,
    setPassword,
    passwordVisible,
    handleTogglePassword,
    submit,
    redirect,
  };
};

export default useGetRegisterData;
