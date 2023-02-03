import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./api/features/auth/authSlice";
import { useRouter } from "next/router";

import Carousell from "../components/Carousell";
import ViewVertical from "../components/ViewVertical";
import useWindowDimensions from "./../hooks/useWindowDimensions";

// import Carousell from "../components/Carousell";

const Home: NextPage = () => {
  const { width, height } = useWindowDimensions();
  const [stateVerticalMobile, setStateVerticalMobile] = useState(false);
  const user = useSelector(selectCurrentUser);
  const router = useRouter();

  if (!user) router.push("/login");

  useEffect(() => {
    if (width && height) {
      height > width
        ? setStateVerticalMobile(true)
        : setStateVerticalMobile(false);
    }
  }, [width, height]);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
  
  return user ? stateVerticalMobile ? <ViewVertical /> : <Carousell /> : null;
};

export default Home;
