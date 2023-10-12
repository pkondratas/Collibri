import React, { useState } from "react";
import PostContainer from "./PostContainer";
import "../styles/post-container.css";

const RoomLayout = () => {
  
  const [showPosts, setShowPosts] = useState(0)
  
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          {/* Grid header element */}
          <p align={"center"}>header</p>
        </div>
        <div className="row">
          <div className="col-lg-2">
            {/* Grid element to display room icons/names(kaip discorde) */}
            <p>rooms</p>
          </div>
          <div className="col-lg-3">
            {/* Grid element to display sections */}
            {/*<p>sections</p>*/}
          </div>
          <div className="col-lg-6">
            {/* Grid element to display all posts */}
            <div className="post-container">
              <PostContainer sectionId="2"/>
            </div>
            <div className="row">
              {/* Nested row for grid element */}
              <div className="col-lg-12">
                <p>write post</p>
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