import React from "react";
import {
  Animated,
  Categories,
  Collections,
  Collectors,
  Footer,
  Hero,
  Navbar,
  Trending,
} from "../components";
import title from "../components/title";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      {title.map((item, index) => {
        return <Collections title={item.title} key={index} />;
      })}
      <Categories titleNFT="NFT 101" />
      <Categories titleNFT="Explore Categories" />
      <Footer />
    </div>
  );
};

export default Home;
