import Head from "next/head";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>React boiler code with tailwind css</title>
        {/* this app created from next js */}
        <meta name="description" content="" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" ">
       hai
      </main>
    </div>
  );
}
