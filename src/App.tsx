import { useEffect, useState } from "react";

import apiCats from "./api/api";

function App() {
  const [img, setImg] = useState();
  useEffect(() => {
    apiCats().then((res) => {
      setImg(res[0]);
      debugger;
    });
  });
  console.log(img);
  if (!img) return undefined;
  return <div>ss</div>;
}

export default App;
