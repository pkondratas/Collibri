import React from "react";
import ParentCombonent from "./ParentCombonent";

const RoomLayout = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          {/* Grid header element */}
          {/*<p align={"center"}>header</p>*/}
        </div>
        <div className="row">
          <div className="col-lg-2">
            {/* Grid element to display room icons/names(kaip discorde) */}
            {/*<p>rooms</p>*/}
          </div>
          <div className="col-lg-7">
            {/* Grid element to display sections */}
            {/*<p>sections</p>*/}
            <ParentCombonent />
          </div>
          <div className="col-lg-6">
            {/* Grid element to display all posts */}
            {/*<p>posts</p>*/}
            <div className="row">
              {/* Nested row for grid element */}
              <div className="col-lg-12">
                {/*<p>write post</p>*/}
                {/* Grid element to write a post */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomLayout;