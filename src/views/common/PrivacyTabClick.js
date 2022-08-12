import React, { useContext } from "react";
import { ThemeContext } from "../../context";

export default function PrivacyTabClick(setTab, tab) {

  const { theme } = useContext(ThemeContext);
  const onClickTab = (e, tabID) => {
    setTab(tabID);
  }
  return (
    <div  className="TABS_sticky"
        style={{ backgroundColor: theme === "dark" && "#282828" }}
      >
        <div className="sticky_padding" />

        <div
          className={
            "TABS_layout TABS_layout_padding " +
            (theme === "dark"
              ? "menuBorderBottomDark"
              : "menuBorderBottomLight")
          }
        >
          <div className="TABS_tab FontR textF16" onClick={e => onClickTab(e, 0)}>
            <div
              className={
                tab === 0 //index === visibleIndex
                  ? "w-full h-full tagADefault tabATagTab FontEB"
                  : "w-full h-full tagADefault FontR " +
                    (theme === "dark" ? "tcw" : "tcg3")
              }
            >
              HEALIARY
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            <div
              className="separator"
              style={{
                backgroundColor: theme === "dark" ? "#5F5F5F" : "#E1E1E1",
              }}
            />
          </div>
          <div className="TABS_tab FontR textF16" onClick={e => onClickTab(e, 1)}>
            <div
              className={
                tab === 1 //index === visibleIndex
                  ? "w-full h-full tagADefault tabATagTab FontEB"
                  : "w-full h-full tagADefault FontR " +
                    (theme === "dark" ? "tcw" : "tcg3")
              }
            >
              OSTOMY
            </div>
          </div>
        </div>
      </div>
  )
}