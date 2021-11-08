import axios from "axios";
import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import { useParams } from "react-router-dom";

function CourseMain() {
  const { progressId } = useParams();

  //fetch from db
  const [content, setContent] = useState([]);
  useEffect(() => {
    try {
      const fecthContent = async () => {
        const res = await axios.get("http://localhost:8080/course/1");
        setContent(res.data);
      };
      fecthContent();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //finish chapter
  const finishChapter = async () => {
    const res = await axios.patch("http://localhost:8080/progress/course", {
      completed: parseInt(progressId) + 1,
      // completed: 6,
      UserId: localStorage.getItem("userId"),
    });
  };

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
              <button
                className="bg-green-700 p-2 rounded-lg font-bold text-white"
                onClick={finishChapter}
              >
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
