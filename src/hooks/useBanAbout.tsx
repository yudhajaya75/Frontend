import { useEffect, useState } from 'react'

function useBanAbout() {
    const [content, setContent] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/about?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);
            });
    }, []);

    return {
        content,
        loading,
    }
}

export default useBanAbout