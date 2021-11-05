import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SideNav from "./SideNav";

function CourseId() {
  const { progressId } = useParams();
  const [content, setContent] = useState([]);
  useEffect(() => {
    try {
      const fecthContent = async () => {
        const res = await axios.get(
          `http://localhost:8080/course/${progressId}`
        );
        setContent(res.data);
      };
      fecthContent();
    } catch (error) {
      console.log(error);
    }
  }, [progressId]);

  // const finishChapter =  async () => {
  //   const res = await axios.patch(`http://localhost:8080/progress/course/`, {
  //     CourseId : id,
  //     userId :
  //   })
  // }

  return (
    <div className="grid grid-cols-10 my-10">
      <div className="col-span-2 ml-1">
        <SideNav />
      </div>
      <div className="col-span-8 ml-2 bg-gray-300 rounded-lg p-5">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-4">{content.name}</h1>
          <div className="flex justify-center">
            <iframe
              title="mainVid"
              src={content.mainVid}
              width="600"
              height="400"
            ></iframe>
          </div>
          <div className="flex justify-start">
            <p className="mt-5">{content.mainText}</p>
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

export default CourseId;
