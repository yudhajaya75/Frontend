import React, { useEffect, useState } from 'react'

function useContact() {
    const [content, setContent] = useState<any>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/contact-information`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
            })
    }, []);
    console.log(content)

    return {
        content
    }
}

export default useContact