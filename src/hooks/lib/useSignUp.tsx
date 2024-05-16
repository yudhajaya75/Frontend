import { SyntheticEvent, useState } from "react";
import Swal from "sweetalert2";

const useGetRegisterData = () => {
<<<<<<< HEAD
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

        try {
            await fetch(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            Swal.fire({
                icon: 'success',
                title: 'Pendaftaran Berhasil!',
                text: 'Akun Anda berhasil didaftarkan.',
            });

            setRedirect(true);
        } catch (error) {
            console.error("Error:", error);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Terjadi kesalahan saat mendaftar.',
            });
        }
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
=======
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
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Password harus lebih dari 6 karakter",
      });
    }

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
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
};

export default useGetRegisterData;
