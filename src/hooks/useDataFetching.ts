import { useEffect, useState } from 'react';

const useDataFetching = () => {
    const [content, setContent] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/personal-cards?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return { content, loading };
};

export default useDataFetching;
