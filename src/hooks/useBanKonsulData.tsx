import { useEffect, useState } from "react";

function useBanKonsulData() {
  const [content, setContent] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/konsultasi?populate=*`)
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

export default useBanKonsulData;
