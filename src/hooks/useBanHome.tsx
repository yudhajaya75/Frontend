import { useEffect, useState } from "react";
import { GalleryBanner } from "../@types/GalleryBanner";

function useBanHome() {
  const [content, setContent] = useState<any>();
  const [banner, setBanner] = useState<GalleryBanner[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        `${process.env.REACT_APP_API_URL}/gallery-banner-homepages?populate=*`,
        {
          method: "GET",
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
            "Content-Type": "application/json",
          },
        }
      ),
      fetch(`${process.env.REACT_APP_API_URL}/homepage?populate=*`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then(([galleryHome, HomePage]) => {
        setContent(HomePage.data);
        setBanner(galleryHome.data);
        setTimeout(() => setLoading(false), 4000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => setLoading(false), 4000);
      });
  }, []);

  return {
    content,
    banner,
    loading,
  };
}

export default useBanHome;
