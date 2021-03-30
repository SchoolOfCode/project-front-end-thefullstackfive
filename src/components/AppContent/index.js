import css from "../AppContent/AppContent.module.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";
import Upload from "../Upload";

import * as pages from "../../libs/pages";
import * as actions from "../../libs/actions";
import { useEffect } from "react";


function AppContent({ state, dispatch }) {

  // Go to feed on startup ( which loads initial data )
  useEffect(() => {
    goToFeed();
  }, []);



  function goToFeed() {
    dispatch({ type: actions.GO_TO_FEED });
  }

  function clickToClassroom(classroomIndex) {
    dispatch({ type: actions.GO_TO_CLASSROOM, payload: classroomIndex });
  }

  function clickToHomeworkViewer(homeworkIndex) {
    dispatch({ type: actions.GO_TO_HOMEWORK, payload: homeworkIndex });
  }

  function upload(payload) {
    dispatch({ type: actions.UPLOAD, payload: payload })
  }

  if (state.page === pages.FEED) {
    return (
      <div className={css.Test}>
        <HomeWorkFeed homeworkList={state.homework} clickToClassroom={clickToClassroom} />
        {/* <Upload upload={upload} /> */}
      </div >
    );
  }
  else if (state.page === pages.CLASSROOM) {
    return (



      <div className={css.Test}>
        <MyClassroom studentClick={clickToHomeworkViewer} children={state.homework[0].children} backClick={goToFeed} />
      </div >
    );
  }
  else if (state.page === pages.VIEWER) {
    return (



      <div className={css.Test}>
        <HomeworkViewer clickToClassroom={clickToClassroom} />
      </div >
    );
  }
  else { // blank page
    return null;
  }
}

export default AppContent;