import { useEffect, useState } from 'react'

function useFooter() {
    const [adreess, setAdreess] = useState<any>();
    const [contactUs, setContactUs] = useState<any>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/footer-adress?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setAdreess(data.data);
            })

        fetch(`${process.env.REACT_APP_API_URL}/footer-contact-us?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setContactUs(data.data)
            })
    }, [])

    return {
        adreess,
        contactUs
    }
}

export default useFooter