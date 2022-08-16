import React from "react";
const testTitle = ["구분", "항목", "기간"];
const testVariables = [
  [
    "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 \n - 대출 받기: 대출 받기 서비스 제공 \n - 아파트 대출 한도 계산기: 주택담보대출 한도를 계산하여 정보 제공",
    "5. 대출 \n\t - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 ",
    "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공",
  ],
  [
    "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 \n - 대출 받기: 대출 받기 서비스 제공 \n - 아파트 대출 한도 계산기: 주택담보대출 한도를 계산하여 정보 제공",
    "5. 대출 \n\t - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 ",
    "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공",
  ],
];
const newLine = new RegExp("\n");
const newTab = new RegExp("\t");
const Table = ({ titles = testTitle, cell = testVariables }) => {
  const processNewLine = (content) => {
    return content.split(newLine);
  };
  const processTab = (content, idx) => {
    console.log(newTab.test(content));
    if (newTab.test(content)) {
      return (
        <p className={`tab-1 m-reset ${idx===0 ? "" : "mt-16"} FontNL`} key={idx}>
          {content}
        </p>
      );
    } else return <p className={`m-reset ${idx===0 ? "" : "mt-16"} FontNL`} key={idx}>{content}</p>;
  };
  return (
    <table cellSpacing={0}>
      <thead>
        <tr>
          {titles.map((title, idx) => (
            <th
              key={idx}
              className={`bg-tableheader tctheader p-12 FontNL border border-b-0 ${
                idx === titles.length - 1 ? "" : "border-r-0"
              }`}
              style={{borderColor: "#e5e8eb"}}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cell.map((contents, cell_idx) => (
          <tr>
            {contents.map((content, contents_idx) => (
              <td
                key={contents_idx}
                className={`p-12 tctheader border  ${
                  cell_idx === cell.length - 1 ? "" : "border-b-0"
                } ${contents_idx === titles.length - 1 ? "" : "border-r-0"} `}
                style={{borderColor: "#e5e8eb"}}
              >
                {processNewLine(content).map((line, contents_idx) =>
                  processTab(line, contents_idx)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
