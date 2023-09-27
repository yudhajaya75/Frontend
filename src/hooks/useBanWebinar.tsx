import { useEffect, useState } from "react";

function useBanWebinar() {
  const [content, setContent] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/webinar?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.data);
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  return {
    content,
    loading,
  };
}

export default useBanWebinar;
