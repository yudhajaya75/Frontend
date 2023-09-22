import { useEffect, useState } from "react";
import { HTTPAruna } from "../services/handlerApi";
import { WebinarResponse } from "../@types/Webinar";

function useCardWebinar() {
    const [content, setContent] = useState<WebinarResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        HTTPAruna.get("api/products?populate=*&filters[category][$eq]=Webinar").then(
        (res) => {
            setContent(res.data);
            setLoading(false)
        }
        );
    }, []);

    return {
        content,
        loading,
    };
}

export default useCardWebinar;
