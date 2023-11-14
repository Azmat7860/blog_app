import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Article from "./container/Article";
import CTA from "./container/CTA";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Article/>
      <CTA/>
    </MainLayout>
  );
};

export default Home;
