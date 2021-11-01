import React from "react";

function Landing() {
  return (
    <div className="container-xl bg-gradient-to-b from-red-400 to-red-300 h-screen">
      <div className="grid grid-cols-10 w-10/12 mx-auto">
        <div className="col-span-6">
          <div className="flex justify-center my-60">
            <div className="flex-col">
              <h1 className=" text-white font-extrabold text-6xl">
                楽しく学ぶ。
              </h1>
              <h1 className=" text-white font-extrabold text-6xl">
                楽しく身に付ける。
              </h1>
              <br />
              <h1 className=" text-white font-extrabold text-6xl">マナビー</h1>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col my-60">
            <h1 className="font-extrabold text-4xl text-white">
              Discover fun new way to learn Japanese, as the way it suppose to
              be, with us at.
            </h1>
            <br />
            <div>
              <h1 className="bg-white text-4xl p-4 rounded-lg font-extrabold text-red-400 inline-block">
                ManaBee
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="landingMain"></section>
    </div>
  );
}

export default Landing;
