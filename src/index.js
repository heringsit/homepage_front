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
import "./additional.css";
import DetailPage from "./views/News/Sections/detail/DetailPage";
import Main from "./views/Main/Main";
import { ThemeContext } from "./context";

export const imsi = process.env.PUBLIC_URL; // 운영계
// export const imsi = `http://52.79.120.20:9099`; // 개발계
// export const imsi = `http://localhost:9099`; // local

const App = () => {
  const cookietheme = localStorage.getItem("theme");
  if (!cookietheme) {localStorage.setItem("theme", "light");}
  const [theme, setTheme] = useState(cookietheme ? cookietheme : "light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
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
          <Redirect exact from={`/`} to={"/aboutus"} />
        </Switch>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
