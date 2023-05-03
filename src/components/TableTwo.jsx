import React from "react";

const data = [
  {
    key: 1,
    name: "Pepe Edition by Matt Furie",
    floorPrice: "0.03 ETH",
    volume: "0.71 ETH",
    img: "https://i.seadn.io/gcs/files/42eca01034084dc7ab6791b6866f588c.png?auto=format&w=256",
  },
  {
    key: 3,
    name: "Metaline-Mystery Box",
    floorPrice: "0.02 ETH",
    volume: "0.57 ETH",
    img: "https://i.seadn.io/gcs/files/0f45c249c0b3683f6047c1efbebb3fa5.jpg?auto=format&w=256",
  },
  {
    key: 5,
    name: "BEANZ Official",
    floorPrice: "1.47 ETH",
    volume: "10 ETH",
    img: "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&w=256",
  },
  {
    key: 2,
    name: "Azuki",
    floorPrice: "16.95 ETH",
    volume: "148.6 ETH",
    img: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
  },
  {
    key: 4,
    name: "feetpix.wtf",
    floorPrice: "0.05 ETH",
    volume: "0.87 ETH",
    img: "https://i.seadn.io/gcs/files/a61cafbe5b179154de00b882dbf025ab.gif?auto=format&w=256",
  },
];

const dataOne = [
  {
    key: 10,
    name: "Pepe Edition by Matt Furie",
    floorPrice: "0.03 ETH",
    volume: "0.71 ETH",
    img: "https://i.seadn.io/gcs/files/42eca01034084dc7ab6791b6866f588c.png?auto=format&w=256",
  },
  {
    key: 7,
    name: "Metaline-Mystery Box",
    floorPrice: "0.02 ETH",
    volume: "0.57 ETH",
    img: "https://i.seadn.io/gcs/files/0f45c249c0b3683f6047c1efbebb3fa5.jpg?auto=format&w=256",
  },
  {
    key: 8,
    name: "BEANZ Official",
    floorPrice: "1.47 ETH",
    volume: "10 ETH",
    img: "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&w=256",
  },
  {
    key: 6,
    name: "Azuki",
    floorPrice: "16.95 ETH",
    volume: "148.6 ETH",
    img: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
  },
  {
    key: 9,
    name: "feetpix.wtf",
    floorPrice: "0.05 ETH",
    volume: "0.87 ETH",
    img: "https://i.seadn.io/gcs/files/a61cafbe5b179154de00b882dbf025ab.gif?auto=format&w=256",
  },
];

const TableTwo = () => {
  return (
    <div>
      <section className="w-full">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="headers flex flex-wrap">
                <div className=" w-[400px] header title-font font-semibold text-gray-700 tracking-wide text-xs mb-3 uppercase">
                  Collection
                </div>
                <div className=" w-[150px] header title-font font-semibold text-gray-700 tracking-wide text-xs mb-3 uppercase">
                  Floor Price
                </div>
                <div className=" w-[150px] header title-font font-semibold text-gray-700 tracking-wide text-xs mb-3 uppercase">
                  Volume
                </div>
              </div>
              <div className="table">
                {data.map(({ key, name, floorPrice, volume, img }) => (
                  <div
                    key={key}
                    className="row flex flex-wrap items-center justify-center first-letter my-6 hover:bg-blue-gray-100 py-2 px-3 rounded-md cursor-pointer"
                  >
                    <div className=" w-[400px] cell">
                      <div className="flex items-center">
                        <p className=" pr-3 font-semibold text-gray-700">
                          {key}
                        </p>
                        <div className="w-[72px] h-[72px] inline-flex items-center justify-center rounded-md bg-gray-800 text-white relative flex-shrink-0">
                          <img
                            className="w-full h-full rounded-md"
                            src={img}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            {name}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[150px] cell">
                      <div className="flex items-center">
                        <p className=" text-base font-medium text-black">
                          {floorPrice}
                        </p>
                      </div>
                    </div>
                    <div className=" w-[150px] cell">
                      <div className="flex items-center">
                        <p className=" text-base font-medium text-black">
                          {volume}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="headers flex flex-wrap">
                <div className=" w-[400px] header title-font font-semibold text-gray-700 tracking-wide text-xs mb-3 uppercase">
                  Collection
                </div>
                <div className=" w-[150px] header title-font font-semibold text-gray-700 tracking-wide text-xs mb-3 uppercase">
                  Floor Price
                </div>
                <div className=" w-[150px] header title-font font-semibold text-gray-700 tracking-wide text-xs mb-3 uppercase">
                  Volume
                </div>
              </div>
              <div className="table">
                {dataOne.map(({ key, name, floorPrice, volume, img }) => (
                  <div
                    key={key}
                    className="row flex flex-wrap items-center justify-center first-letter my-6 hover:bg-blue-gray-100 py-2 px-3 rounded-md cursor-pointer"
                  >
                    <div className=" w-[400px] cell">
                      <div className="flex items-center">
                        <p className=" pr-3 font-semibold text-gray-700">
                          {key}
                        </p>
                        <div className="w-[72px] h-[72px] inline-flex items-center justify-center rounded-md bg-gray-800 text-white relative flex-shrink-0">
                          <img
                            className="w-full h-full rounded-md"
                            src={img}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            {name}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[150px] cell">
                      <div className="flex items-center">
                        <p className=" text-base font-medium text-black">
                          {floorPrice}
                        </p>
                      </div>
                    </div>
                    <div className=" w-[150px] cell">
                      <div className="flex items-center">
                        <p className=" text-base font-medium text-black">
                          {volume}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableTwo;
