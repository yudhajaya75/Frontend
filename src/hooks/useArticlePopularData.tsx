import React, { useEffect, useState } from 'react'

function useArticlePopularData() {
    const [popular, setPopular] = useState<any>([]);
    const [loadings, setLoadings] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card/populate`)
            .then((response) => response.json())
            .then((data) => {
                setPopular(data.data);
                setTimeout(() => setLoadings(false), 4000);
            })
    }, []);

    return {
        popular,
        loadings
    }
}

export default useArticlePopularData