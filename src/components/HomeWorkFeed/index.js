import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropDownTerm from "../NavFilter";
import React, { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const HomeWorkFeed = ({ homeworkList, clickToClassroom }) => {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");

  function changeFilter(f1, f2) {
    setFilter1(f1);
    setFilter2(f2);
  }

  function showAllHwks() {
    setFilter1("");
  }

  return (
    <div>
      <DropDownTerm handleClick={changeFilter} />
      <div>
        <button
          className={
            setFilter1 || setFilter2 !== null
              ? css.resetBtn
              : css.resetBtnHidden
          }
          onClick={showAllHwks}
        >
          Reset
        </button>

        {/* className={
                homeworkList !== changeFilter
                  ? css.resetBtnHidden
                  : css.resetBtn
              } */}
      </div>
      <ul className={css.post}>
        {homeworkList
          .map((homework, index) => [
            <li>
              {homework.dateSet.includes(filter1) ||
              homework.dateSet.includes(filter2) ? (
                <Post
                  key={index}
                  homework={homework}
                  index={index}
                  clickToClassroom={() => clickToClassroom(index)}
                />
              ) : null}
            </li>,
          ])
          .reverse()}
      </ul>
      <a className={css.goToTop} href="#1">
        <IoIosArrowDropup />
      </a>
    </div>
  );
};

export default HomeWorkFeed;
