import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const tags = {
    1: "All",
    2: "Art",
    3: "Gaming",
    4: "Memberships",
    5: "PFPs",
    6: "Photography",
  };

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const data = {
    1: {
      title: "Batman Arkham Knight",
      subtitle: "Floor: 0.1 ETH",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    2: {
      title: "Batman Arkham Knight",
      subtitle: "Floor: 0.01 ETH",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    3: {
      title: "Batman Knight",
      subtitle: "Floor: 0.5 ETH",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    4: {
      title: "Batman A",
      subtitle: "Floor: 0.1 ETH",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    5: {
      title: "Chichen Itza",
      subtitle: "SUBTITLE",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    6: {
      title: "Chichen Itza",
      subtitle: "SUBTITLE",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    7: {
      title: "Chichen Itza",
      subtitle: "SUBTITLE",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
    8: {
      title: "Chichen Itza",
      subtitle: "SUBTITLE",
      image: "https://images.alphacoders.com/898/898380.jpg ",
    },
  };

  return (
    <div >
      <div className=" overflow-hidden" id="backgroundGrad">
        <div id="backgroundImage"></div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            {Object.keys(tags).map((key) => {
              return (
                <div>
                  <div class="flex flex-col text-center w-full">
                    <p class=" py-1 px-4 mr-2 bg-gray-300 hover:bg-gray-500 hover:text-gray-100 transition-all text-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-100 cursor-pointer font-semibold">
                      {tags[key]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container mx-auto px-3 space-y-1">
            <Slider {...settings}>
              {Object.keys(data).map((key) => {
                return (
                  <div class="p-2">
                    <div class="bg-gray-100 w-[360px] h-[360px] rounded-3xl overflow-hidden transition-all relative">
                      <img
                        class="h-full rounded w-full object-cover object-center mb-6 hover:scale-110 transition-all"
                        src={data[key].image}
                        alt="content"
                      />
                      <div className="contentImage"></div>
                      <div className="desc mb-2">
                        <h2 class="text-base text-gray-50 font-medium title-font">
                          {data[key].title}
                        </h2>
                        <h3 class="text-gray-50 text-sm font-medium">
                          {data[key].subtitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
