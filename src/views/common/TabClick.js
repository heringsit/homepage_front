import { Box, createStyles, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useContext } from "react";
import { useLocation } from "react-router";
import { ThemeContext } from "../../context";

export default function TabClick({ isScroll }) {
  const useStyles = makeStyles((theme) =>
    createStyles({
      text: {
        color: "#787878",
      },
      indicator: {
        color: "#787878",
      },
    })
  );

  const classes = useStyles();
  let pathname = useLocation().pathname;
  let hashid = useLocation().hash;
  console.log(typeof hashid, ">>pathname");
  const aboutustabs = ["whoweare", "heringsteam", "researchpartners"];
  const crstabs = [
    "propreplatform",
    "datamanagement",
    "biostatistics",
    "clinicaloperation",
  ];
  const researchtabs = [
    "nutritionincancercare",
    "drugadverseevent",
    "recurrenceprediction",
    "exercise",
    "aibasedostomyconditioncheck",
    "adherenceofhormonetherapy",
  ];

  const allATag = document.querySelectorAll(".tagADefault");

  const LinkTab = (props) => {
    console.log(props.href, "props");
    return (
      <Tab
        style={{ textTransform: "none" }}
        component="a"
        to={props.href}
        {...props}
      />
    );
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="TABS_sticky"
        style={{ backgroundColor: theme === "dark" && "#282828" }}
      >
        <Box style={{ paddingTop: "100px" }} sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            {pathname === "/aboutus/"
              ? aboutustabs.map((tab, index) => (
                  <LinkTab
                    key={index}
                    label={
                      tab === "whoweare"
                        ? "Who We Are"
                        : tab === "heringsteam"
                        ? "HERINGS Team"
                        : tab === "researchpartners"
                        ? "Partners & Investors"
                        : ""
                    }
                    className={classes.text}
                    href={`#${tab}`}
                  />
                ))
              : pathname === "/crs/"
              ? crstabs.map((tab, index) => (
                  <LinkTab
                    key={index}
                    label={
                      tab === "propreplatform"
                        ? "PRO · PRE Platform"
                        : tab === "datamanagement"
                        ? "Data management"
                        : tab === "biostatistics"
                        ? "Bio-Statistics"
                        : tab === "clinicaloperation"
                        ? "Clinical Operation"
                        : ""
                    }
                    href={`#${tab}`}
                  />
                ))
              : researchtabs.map((tab, index) => (
                  <LinkTab
                    key={index}
                    label={
                      tab === "nutritionincancercare"
                        ? "Nutrition in Cancer Care"
                        : tab === "drugadverseevent"
                        ? "Drug Adverse Event"
                        : tab === "recurrenceprediction"
                        ? "Recurrence Prediction"
                        : tab === "exercise"
                        ? "Exercise"
                        : tab === "aibasedostomyconditioncheck"
                        ? "AI-based Ostomy Condition Check"
                        : tab === "adherenceofhormonetherapy"
                        ? "Adherence of Hormone Therapy"
                        : ""
                    }
                    href={`#${tab}`}
                  />
                ))}
          </Tabs>
        </Box>
      </div>
    </>
  );
}
