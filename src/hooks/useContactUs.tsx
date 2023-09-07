import axios from 'axios';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function useContactUs() {
    const [content, setContent] = useState<any>()
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const contact = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            message: values.message
        }

        axios.post(`${process.env.REACT_APP_API_URL}/contact-uses`, {
            data: contact
        }).catch((e) => console.log(e))

        Swal.fire({
            icon: "success",
            title: "Terima Kasih atas saran dan masukannya!"
        })

        return setValues({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        })
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/contact-information?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data)
            })
    }, [])


    return {
        content,
        handleChange,
        handleSubmit,
        values
    }
}

export default useContactUs