import React from "react";
import SideNav from "./SideNav";

function CourseMain() {
  //fetch from db
  const mainVid = "https://www.youtube.com/embed/PAfi3D9K7lk";
  const mainText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl";

  return (
    <div className="grid grid-cols-10 my-10">
      <div className="col-span-2 ml-1">
        <SideNav />
      </div>
      <div className="col-span-8 ml-2 bg-gray-300 rounded-lg p-5">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <iframe
              title="mainVid"
              src={mainVid}
              width="600"
              height="400"
            ></iframe>
          </div>
          <div className="flex justify-start">
            <p className="mt-5">{mainText}</p>
          </div>
          <div className="flex justify-start">
            <div className="my-5">
              <button className="bg-green-700 p-2 rounded-lg font-bold text-white">
                Complete &amp; Go to next chapter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMain;
