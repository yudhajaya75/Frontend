// useDataFetching.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import './sosmed.css'

const useDataFetching = (url: string) => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, [url]);

    return { content, loading };
};

export default useDataFetching;
