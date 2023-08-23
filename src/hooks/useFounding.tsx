import React, { useEffect, useState } from 'react'

function useFounding() {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/founder-card`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);
            });
    }, []);

    return {
        content,
        loading
    }
}

export default useFounding