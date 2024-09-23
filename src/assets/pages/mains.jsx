import { useState } from "react";
import imgm from "../images/youtbe.webp";
import img1 from "../images/profile.jpg";
function Mains() {
  const [Active, SetActive] = useState("All");
  const Buttons = [
    "All",
    "Live",
    "Intelligence agencies",
    "Military",
    "Air force",
    "Rockets",
    "Podcasts",
    "Strategies",
    "Security",
    "Currencies",
    "Gaming",
    "Java",
  ];
  function Handle(label) {
    SetActive(label);
  }
  return (
    <>
      <div>
        <div className="w-full left-0 top-20 bg-black py-3 sticky z-10  ">
          <div className="flex items-center overflow-hidden justify-between px-10">
            {Buttons.map((btn) => (
              <button
                className={`${
                  Active === btn
                    ? "px-2 py-1 bg-gray-500 transition duration-200 rounded-md"
                    : "px-2 py-1"
                }`}
                key={btn}
                onClick={() => Handle(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </>
  );
}

function Items() {
  return (
    <>
      <div className="px-10 py-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        <button className="w-full  rounded-md overflow-hidden">
          <img src={imgm} alt="" />
          <div className="flex items-start gap-3 mt-6">
            <img src={img1} alt="" className="rounded-full w-10  " />
            <div className="flex flex-col items-start gap-y-[4px] ">
              <p>How to become a coder in 2024</p>

              <div className="flex flex-col items-start">
                <p>Coder Channel </p>
                <p>10m views. 1year ago </p>
              </div>
            </div>
          </div>
        </button>
        <button className="w-full  rounded-md overflow-hidden">
          <img src={imgm} alt="" />
          <div className="flex items-start gap-3 mt-6">
            <img src={img1} alt="" className="rounded-full w-10  " />
            <div className="flex flex-col items-start gap-y-[4px] ">
              <p>How to become a coder in 2024</p>

              <div className="flex flex-col items-start">
                <p>Coder Channel </p>
                <p>10m views. 1year ago </p>
              </div>
            </div>
          </div>
        </button>{" "}
        <button className="w-full  rounded-md overflow-hidden">
          <img src={imgm} alt="" />
          <div className="flex items-start gap-3 mt-6">
            <img src={img1} alt="" className="rounded-full w-10  " />
            <div className="flex flex-col items-start gap-y-[4px] ">
              <p>How to become a coder in 2024</p>

              <div className="flex flex-col items-start">
                <p>Coder Channel </p>
                <p>10m views. 1year ago </p>
              </div>
            </div>
          </div>
        </button>{" "}
        <button className="w-full  rounded-md overflow-hidden">
          <img src={imgm} alt="" />
          <div className="flex items-start gap-3 mt-6">
            <img src={img1} alt="" className="rounded-full w-10  " />
            <div className="flex flex-col items-start gap-y-[4px] ">
              <p>How to become a coder in 2024</p>

              <div className="flex flex-col items-start">
                <p>Coder Channel </p>
                <p>10m views. 1year ago </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Mains;
