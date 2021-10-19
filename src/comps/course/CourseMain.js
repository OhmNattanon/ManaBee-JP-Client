import React from "react";
import SideNav from "./SideNav";

function CourseMain() {
  return (
    <div className="d-flex">
      <SideNav />
      <div>
        <div className="d-flex justify-content-center">
          <iframe
            src="https://www.youtube.com/embed/PAfi3D9K7lk"
            width="400"
            height="300"
          ></iframe>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl
          orci, auctor eu turpis quis, laoreet hendrerit nisi. Fusce facilisis,
          odio vel ornare efficitur, tellus felis mollis ante, sit amet dapibus
          dolor arcu vel ex. Ut lacinia vestibulum felis, elementum varius erat
          sollicitudin ut. Maecenas in erat eget neque vehicula vulputate vel ac
          nisl. Sed sit amet sem pretium, tincidunt augue non, feugiat orci.
          Donec ut porta purus. Ut et odio eu tortor faucibus aliquet non nec
          risus. Praesent scelerisque et augue eu gravida. Praesent iaculis
          nulla quam, in lobortis lorem euismod vitae. Fusce vel aliquet mauris.
        </p>
        <div className="d-flex">
          <button className="m-2">Mark as completed</button>
          <button className="m-2">Go to next chapter</button>
        </div>
      </div>
    </div>
  );
}

export default CourseMain;
