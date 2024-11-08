import React, { useEffect, useState } from "react";

import { getMenu } from "../api/api";
import Header from "../components/Header/Header.tsx";

export type DataApi = {
  logo: string;
  nav: { [key: string]: string }[];
};

const ContainerHeader: React.FC = () => {
  const [data, setData] = useState<DataApi>({ nav: [], logo: "" });

  useEffect(() => {
    getMenu().then((res) => setData({ nav: res.header, logo: res.logo }));
  }, []);

  return <Header data={data} />;
};

export default ContainerHeader;
