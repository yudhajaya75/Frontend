import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function useCard() {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return {
        content,
        loading
    }
}

export default useCard