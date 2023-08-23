import React, { useEffect, useState } from 'react'

function useArticlePopularData() {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/articel-card/populate`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);
            })
    }, []);
    console.log(content)

    return {
        content,
        loading
    }
}

export default useArticlePopularData