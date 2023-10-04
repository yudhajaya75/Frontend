import { useEffect, useState } from "react";
import { HTTPAruna } from "../services/handlerApi";
import { PackagesResponse, SinglePackageResponse } from "../@types/Package";

function usePackage(id?: number) {
  const [contents, setContents] = useState<PackagesResponse | null>(null);
  const [singleContent, setSingleContent] =
    useState<SinglePackageResponse | null>(null);

  const defaultQuery = "/api/packages";

  const getPackages = async () => {
    try {
      const res: PackagesResponse = (
        await HTTPAruna.get(defaultQuery + "?populate=*")
      ).data;
      setContents(res);
    } catch (err) {
      console.error(err);
    }
  };

  const getDetailPackage = async (id: number) => {
    try {
      const res: SinglePackageResponse = (
        await HTTPAruna.get(defaultQuery + `/${id}?populate=*`)
      ).data;
      setSingleContent(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    id ? getDetailPackage(id) : getPackages();
  }, [id]);

  return { getPackages, getDetailPackage, contents, singleContent };
}

export default usePackage;
