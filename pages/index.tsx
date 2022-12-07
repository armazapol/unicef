import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Carousell from "../components/Carousell";
import ViewVertical from "../components/ViewVertical";
import useWindowDimensions from "./../hooks/useWindowDimensions";
// import Carousell from "../components/Carousell";

const Home: NextPage = () => {
  const { width, height } = useWindowDimensions();
  const [stateVerticalMobile, setStateVerticalMobile] = useState(false);
  useEffect(() => {
    if (width && height) {
      height > width
        ? setStateVerticalMobile(true)
        : setStateVerticalMobile(false);
    }
  }, [width, height]);
  return stateVerticalMobile ? <ViewVertical/> : <Carousell  />;
};

export default Home;
