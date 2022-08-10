import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import DarkModeOnIcon from "../../assets/images/etc/icon_dark_on.svg";
import DarkModeOffIcon from "../../assets/images/etc/icon_dark_off.svg";

export default function DarkToggle(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={props.className}>
      <Button className="modebutton" id="modebutton" onClick={props.onClick}>
        {theme === "dark" ? (
          <label htmlFor="modebutton" className="lighttoggle">
            <img
              src={DarkModeOffIcon}
              alt="dark mode icon"
              className="lighticon"
            />
            {!props.mobile && <span className="lightmode textF10 FontL">LIGHT MODE ON</span>}
          </label>
        ) : (
          <label htmlFor="modebutton" className="darktoggle">
            <img
              src={DarkModeOnIcon}
              alt="dark mode icon"
              className="darkicon"
            />
            {!props.mobile && <span className="darkmode textF10 FontL">DARK MODE ON</span>}
          </label>
        )}
      </Button>
    </div>
  );
}
