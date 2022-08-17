import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const newLine = new RegExp("\n");
const newTab = new RegExp("\t");
const Table = ({ titles, rows }) => {
  // console.log(rows, rows, "rows & rows");
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
          {titles.map((title, idx) => (
            <th
              key={idx}
              className={`${
                theme === "light"
                  ? "bg-tableheader-light tctheader"
                  : "bg-tableheader-dark tcw"
              }  p-12 FontNL textF14 border border-b-0 ${
                idx === titles.length - 1 ? "" : "border-r-0"
              }`}
              style={{ borderColor: "#e5e8eb" }}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, row_idx) => (
          <tr>
            {cells.map((cell, cell_idx) =>
              cell === "" ? (
                <td key={cell_idx} className="border border-t-0"></td>
              ) : (
                <td
                  key={cell_idx}
                  className={`p-12 ${
                    theme === "light" ? "tctheader" : "tcw"
                  } border ${row_idx === rows.length - 1 ? "" : "border-b-0"} ${
                    cell_idx === titles.length - 1 ? "" : "border-r-0"
                  } `}
                  style={{ borderColor: "#e5e8eb" }}
                >
                  {processNewLine(cell).map((line, cell_idx) =>
                    processTab(line, cell_idx)
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
