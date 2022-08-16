import React from "react";
const testTitle = ["구분", "항목", "기간"]
const testVariables = [
  "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 \n - 대출 받기: 대출 받기 서비스 제공 \n - 아파트 대출 한도 계산기: 주택담보대출 한도를 계산하여 정보 제공",
  "5. 대출 \n\t - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공 ",
  "5. 대출 \n - 주택담보대출 찾기: 주택담보대출 찾기 서비스 제공",
]
const newLine = new RegExp("\n");
const newTab = new RegExp("\t");
const Table =  ({titles=testTitle, contents=testVariables}) => {
  const processNewLine = (content) => {
    return (content.split(newLine))
  }
  const processTab = (content, idx) => {

    console.log(newTab.test(content));
    if (newTab.test(content)) {
      return(<p className="tab-1" key={idx}>
        {content}
      </p>)
    }
    else return(<p key={idx}>
    {content}
  </p>)
  }
  return (
    <table cellSpacing={0}>
      <thead>
          <tr>
            {titles.map((title, idx) => (
              <th
                key={idx}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {contents.map((content, idx) => (
              <td
                key={idx}
              >
                {processNewLine(content).map((line, idx) => 
                  processTab(line, idx)
                )}
              </td>
            ))}
          </tr>
        </tbody>
    </table>
  );
}
export default Table;