import React, { useEffect, useState } from 'react'

function useFooter() {
    const [adreess, setAdreess] = useState<any>([]);
    const [contactUs, setContactUs] = useState<any>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/footer-adress`)
            .then((response) => response.json())
            .then((data) => {
                setAdreess(data.data[0]);
            })

        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/footer-contact-us`)
            .then((response) => response.json())
            .then((data) => {
                setContactUs(data.data[0])
            })
    }, [])
    return {
        adreess,
        contactUs
    }
}

export default useFooter