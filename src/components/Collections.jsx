import React from "react";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data";

const Collections = (props) => {
  const { title } = props;

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap w-full mb-14">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="text-2xl font-semibold title-font mb-2 text-gray-900">
                {title}
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 w-full">
              {data.map((data) => {
                return (
                  <Card
                    name={data.name}
                    floorPrice={data.floorPrice}
                    volume={data.volume}
                    image={data.img}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
