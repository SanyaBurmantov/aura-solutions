import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          <meta
              name="description"
              content="AURA is an IT outstaffing company that helps you quickly grow your team in one day, reduce operational costs and maximize results. "
          />
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Aura Solutions"/>
          <meta property="og:description"
                content="AURA is an IT outstaffing company that helps you quickly grow your team in one day, reduce operational costs and maximize results. "/>

      </Helmet>
      <Landing />
    </>
  );
}

