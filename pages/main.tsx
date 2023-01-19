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
  return user ? stateVerticalMobile ? <ViewVertical /> : <Carousell /> : null;
};

export default Home;
