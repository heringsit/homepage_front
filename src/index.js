import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Aboutus from "./views/Aboutus/Aboutus";
import Platforms from "./views/Platforms/Platforms";
import Pipelines from "./views/Pipeline/Pipeline";
import Career from "./views/Career/Career";
// import News from "./views/News/News";
import Contactus from "./views/Contactus/Contactus";
import "./index.css";

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
        <Route path={`/career`} component={Career} />
        <Route path={`/contactus`} component={Contactus} />
        <Route path="*" component={Aboutus} />
        {/* <Route path={`/news`} component={News} />*/}
        {/* <Redirect exact from={`/`} to={"/aboutus"} /> */}
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
