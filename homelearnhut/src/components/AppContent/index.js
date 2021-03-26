import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "../AppContent/AppContent.module.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";

import TopBar from "../TopBar";


import Button from "../Button";
import InputField from "../InputField";
import Upload from "../Upload";
import * as pages from "../../libs/pages";

import * as actions from "../../libs/actions";


function AppContent({ state, dispatch }) {
  function backToFeed() {
    dispatch({ type: actions.BACKTOFEED });
  }


  function clickToClassroom(classroomIndex) {
    dispatch({ type: actions.DOWNTOCLASSROOM, payload: classroomIndex });
  }



  if (state.page === pages.FEED) {
    return (
      <div className={css.Test}>
        <NewsFeed homeworkList={state.homework} clickToClassroom={clickToClassroom} />
      </div >
    );
  }
  else if (state.page === pages.CLASSROOM) {
    return (



      <div className={css.Test}>
        <MyClassroom children={state.homework[0].children} backClick={backToFeed} />
      </div >
    );
  }
  else // Viewer
  {
    return (



      <div className={css.Test}>
        <HomeworkViewer />
      </div >
    );
  }


}

export default AppContent;
