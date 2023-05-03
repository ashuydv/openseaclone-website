import React from "react";

const Card = (props) => {
  const { name, floorPrice, volume, image } = props;

  return (
    <div className="flex flex-wrap items-center justify-evenly -mx-1">
      <div class="bg-white shadow-lg shadow-gray-300 rounded-lg hover:-translate-y-1 cursor-pointer transition-all overflow-hidden min-w-[280px] m-2 ">
        <img
          class="h-52 w-full object-cover object-center mb-2"
          src={image}
          alt="content"
        />
        <div className="p-6 pt-3 pb-4">
          <h2 class="text-md text-black font-semibold title-font mb-2">
            {name}
          </h2>
          {floorPrice === undefined && volume === undefined ? (
            <div>
              <div className="flex flex-wrap">
                
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <p class="leading-relaxed text-sm uppercase font-semibold">
                    Floor
                  </p>
                  <p className=" text-black font-semibold">{floorPrice}</p>
                </div>
                <div className="w-1/2">
                  <p class="leading-relaxed text-sm uppercase font-semibold">
                    Total Volume
                  </p>
                  <p className=" text-black font-semibold">{volume}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
