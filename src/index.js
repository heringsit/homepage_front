import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Aboutus from "./views/Aboutus/Aboutus";
import Platforms from "./views/Platforms/Platforms";
import Pipelines from "./views/Pipeline/Pipeline";
// import Career from "./views/Contactus/Career"; // 경로 수정
import News from "./views/News/News";
import Contactus from "./views/Contactus/Contactus";
import "./index.css";
import DetailPage from "./views/News/Sections/detail/DetailPage";

const App = () => {
  // console.log("index.js!");
  // const his = useHistory();
  // useEffect(() => {
  //   const a = his.listen((...props) => {
  //     console.log(props);
  //   });
  //   return () => {
  //     a();
  //   };
  // }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={Aboutus} />
        <Route path={`/aboutus/:submenu`} component={Aboutus} />
        <Route path={`/aboutus`} component={Aboutus} />
        <Route path={`/platforms/:submenu`} component={Platforms} />
        <Route path={`/platforms`} component={Platforms} />
        <Route path={`/pipeline`} component={Pipelines} />
        {/* Career */}
        <Route path={`/contactus/:submenu`} component={Contactus} />
        <Route path={`/contactus`} component={Contactus} />
        <Route path={`/news/:submenu/detail/:id`} component={DetailPage} />
        <Route path={`/news/:submenu`} component={News} />
        <Route path={`/news`} component={News} />
        <Route path="*" component={Aboutus} />
        <Redirect exact from={`/`} to={"/aboutus"} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
