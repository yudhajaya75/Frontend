import React, { useEffect, useState } from 'react'

function useBanAbout() {
    const [content, setContent] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/about-page`)
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

export default useBanAbout