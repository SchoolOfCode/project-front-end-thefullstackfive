//import css from "../Student/Student.module.css";
import React from "react";
import css from "./Student.module.css";
import { TiInputChecked } from "react-icons/ti";

function Student({ handleClick, name, avatar, hasSubmitted, isMarked }) {
  return (
    <>
      <button
        className={css.profilebtn}
        style={
          hasSubmitted
            ? { backgroundImage: `url(${avatar})` }
            : { backgroundImage: `url(${avatar})` }
        }
        onClick={handleClick}
        disabled={!hasSubmitted}
      ></button>
      <p className={css.name}>{name}</p>

      {isMarked ? (
        <TiInputChecked style={{ color: "green" }} className={css.tickBox} />
      ) : null}

      {/* <TiInputChecked style={isMarked ? { color: "green" } : { color: "lightgray" }} className={css.tickBox} />
      {console.log(css.tickBox)} */}
    </>
  );
}

export default Student;
