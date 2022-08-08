import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Aboutus from "./views/Aboutus/Aboutus";
import Service from "./views/Service/Service";
import Research from "./views/Research/Research";
import Crs from "./views/CRS/Crs";
// import Career from "./views/Contactus/Career"; // 경로 수정
import News from "./views/News/News";
import Contactus from "./views/Contactus/Contactus";
import "./index.css";
import "./common.css";
import DetailPage from "./views/News/Sections/detail/DetailPage";
import Main from "./views/Main/Main";
import { MediaQueryContext, ThemeContext } from "./context";
import { useMediaQuery } from "@material-ui/core";

export const imsi = process.env.PUBLIC_URL; // 운영계
// export const imsi = `http://52.79.120.20:9099`; // 개발계
// export const imsi = `http://localhost:9099`; // local

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // media query 사이즈 관리 & 수정이 쉽도록 context(global variable)로 설정
  const mobile = useMediaQuery("(max-width:320px)");
  const sTablet = useMediaQuery("(max-width:600px)");
  const mTablet = useMediaQuery("(max-width: 768px)");
  const sDesktop = useMediaQuery("(max-width: 1024px)");
  const mDesktop = useMediaQuery("(max-width: 1260px)");
  const lDesktop = useMediaQuery("(max-width: 1920px)");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <MediaQueryContext.Provider
          value={{ mobile, sTablet, mTablet, sDesktop, mDesktop, lDesktop }}
        >
          <Switch>
            <Route exact path={`/`} component={Main} />
            <Route path={`/aboutus/:submenu`} component={Aboutus} />
            <Route path={`/aboutus`} component={Aboutus} />
            <Route path={`/service/:submenu`} component={Service} />
            <Route path={`/service`} component={Service} />
            <Route path={`/research`} component={Research} />
            <Route path={`/crs`} component={Crs} />
            {/* Career */}
            <Route path={`/contactus/:submenu`} component={Contactus} />
            <Route path={`/contactus`} component={Contactus} />
            <Route path={`/news/:submenu/detail/:id`} component={DetailPage} />
            <Route path={`/news/:submenu`} component={News} />
            <Route path={`/news`} component={News} />
            <Route path="*" component={Aboutus} />
            <Redirect exact froåm={`/`} to={"/aboutus"} />
          </Switch>
        </MediaQueryContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
