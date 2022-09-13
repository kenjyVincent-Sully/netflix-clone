import React from "react";
import Head from "next/head";
import { Nav } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Create Netflix clone App</title>
        <meta name="description" content="Netflix clone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
