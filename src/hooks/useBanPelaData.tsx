import { useEffect, useState } from "react";

function useBanPelaData() {
  const [content, setContent] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/pelatihan?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.data);
        setTimeout(() => setLoading(false), 4000);
      });
  }, []);

  return {
    content,
    loading,
  };
}

export default useBanPelaData;
