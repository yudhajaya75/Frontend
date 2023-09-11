import { useEffect, useState } from "react";

function useCardHome() {
  const [content, setContent] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/slider-section-infos?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data.data);
        setTimeout(() => setLoading(false), 4000);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return {
    content,
    loading,
  };
}

export default useCardHome;
