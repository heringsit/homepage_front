import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const newLine = new RegExp("\n");
const newTab = new RegExp("\t");
const Table = ({ rows, columns }) => {
  // console.log(rows, columns, "rows & columns");
  const { theme } = useContext(ThemeContext);
  const processNewLine = (content) => {
    return content.split(newLine);
  };
  const processTab = (content, idx) => {
    console.log(newTab.test(content));
    if (newTab.test(content)) {
      return (
        <p
          className={`tab-1 m-reset ${idx === 0 ? "" : "mt-16"} FontNL textF14`}
          key={idx}
        >
          {content}
        </p>
      );
    } else
      return (
        <p
          className={`m-reset ${idx === 0 ? "" : "mt-16"} FontNL textF14`}
          key={idx}
        >
          {content}
        </p>
      );
  };
  return (
    <table cellSpacing={0}>
      <thead>
        <tr>
          {rows.map((title, idx) => (
            <th
              key={idx}
              className={`${
                theme === "light"
                  ? "bg-tableheader-light tctheader"
                  : "bg-tableheader-dark tcw"
              }  p-12 FontNL textF14 border border-b-0 ${
                idx === rows.length - 1 ? "" : "border-r-0"
              }`}
              style={{ borderColor: "#e5e8eb" }}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns.map((contents, column_idx) => (
          <tr>
            {contents.map((content, contents_idx) =>
              content === "" ? (
                <td key={contents_idx} className="border border-t-0"></td>
              ) : (
                <td
                  key={contents_idx}
                  className={`p-12 ${
                    theme === "light" ? "tctheader" : "tcw"
                  } border ${
                    column_idx === columns.length - 1 ? "" : "border-b-0"
                  } ${contents_idx === rows.length - 1 ? "" : "border-r-0"} `}
                  style={{ borderColor: "#e5e8eb" }}
                >
                  {processNewLine(content).map((line, contents_idx) =>
                    processTab(line, contents_idx)
                  )}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
