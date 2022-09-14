import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import moment from "moment";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ReactComponent as IconClose } from "../../assets/images/05career/close.svg";
import "./Ham.css";

const Ham = () => {
  const [todayIndex, setTodayIndex] = useState(-1);
  const [sabun, setSabun] = useState("");  
  const [exYoil, setExYoil] = useState([]);
  const [exType, setExType] = useState([]);
  const [exceptionHandlingData, setExceptionHandlingData] = useState([]);
  const [days, setDays] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);
  const matches = useMediaQuery("(max-width:600px)");
  let today = moment().format("YY-MM-DD");
  const [isShowAttendanceBoard, setIsShowAttendanceBoard] = useState(false);
  const [userName, setUserName] = useState({name: "", sabun: window.localStorage.getItem("sabun")});
  const [timeGapArray, setTimeGapArray] = useState([]);
  const resettingRef = useRef(false);

  const BACK_END_URL = "http://52.79.53.196:3400";
  // const BACK_END_URL = "http://localhost:3400";
  const get5days = () => {
    let fiveDays = [];
    if (moment().day() == 1) {
      // 월요일
      fiveDays.push(moment().format("MM/DD"));
      fiveDays.push(moment().add(1, "d").format("MM/DD"));
      fiveDays.push(moment().add(2, "d").format("MM/DD"));
      fiveDays.push(moment().add(3, "d").format("MM/DD"));
      fiveDays.push(moment().add(4, "d").format("MM/DD"));
    } else if (moment().day() == 2) {
      // 화요일
      fiveDays.push(moment().subtract(1, "d").format("MM/DD"));
      fiveDays.push(moment().format("MM/DD"));
      fiveDays.push(moment().add(1, "d").format("MM/DD"));
      fiveDays.push(moment().add(2, "d").format("MM/DD"));
      fiveDays.push(moment().add(3, "d").format("MM/DD"));
    } else if (moment().day() == 3) {
      fiveDays.push(moment().subtract(2, "d").format("MM/DD"));
      fiveDays.push(moment().subtract(1, "d").format("MM/DD"));
      fiveDays.push(moment().format("MM/DD"));
      fiveDays.push(moment().add(1, "d").format("MM/DD"));
      fiveDays.push(moment().add(2, "d").format("MM/DD"));
    } else if (moment().day() == 4) {
      fiveDays.push(moment().subtract(3, "d").format("MM/DD"));
      fiveDays.push(moment().subtract(2, "d").format("MM/DD"));
      fiveDays.push(moment().subtract(1, "d").format("MM/DD"));
      fiveDays.push(moment().format("MM/DD"));
      fiveDays.push(moment().add(1, "d").format("MM/DD"));
    } else if (moment().day() == 5) {
      fiveDays.push(moment().subtract(4, "d").format("MM/DD"));
      fiveDays.push(moment().subtract(3, "d").format("MM/DD"));
      fiveDays.push(moment().subtract(2, "d").format("MM/DD"));
      fiveDays.push(moment().subtract(1, "d").format("MM/DD"));
      fiveDays.push(moment().format("MM/DD"));
    }
    return fiveDays;
  };


  const getCoreTimeViolationStamp = async (info) => {
    let result = await axios.post(BACK_END_URL+"/main/coretimeViolation", info);
    console.log("timeStamp >> ", result.data);
    let returnData = "";
    if(result.data.ok){
      returnData = transferPrettyTimeFormatted(getTimeOnly(result.data.timeStamp)); 
    }else{
      returnData = "기록없음"; 
    } 
    return returnData;
  }

  const getWeekHistoryUX = (gubun) => {
    return workHistory.map((work,index) => {
        let startTime = workHistory[index].wstime;
        let endTime = workHistory[index].wctime;
         if(gubun == "start"){
           return <td class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}>{startTime}</td>
         }else if(gubun == "end"){
           return <td class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}>{endTime}</td>
         }else if(gubun == "over"){
          if(startTime != "기록없음" && endTime != "기록없음"){
            return <td class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}><span className="timeGapFont">{timeGapArray[index] > 0 ? "+"+timeGapArray[index] : timeGapArray[index]}</span></td>
          }else{
            return <td class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}>X</td>
          }

         }
      });
  };
  
  const getAccTime = () => {
    let tArr = [];
    let sum = 0;
    for(let index=0; index < timeGapArray.length ; index++){
      if(timeGapArray[index] == "X"){
        tArr.push(<td colSpan={5-index} class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}><span className="exceptionFont">근태예외처리필요</span></td>);
        break;
      }else{
        if(index == 0){
          sum = timeGapArray[0]; 
          tArr.push(<td class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}><span className="timeGapFont">{timeGapArray[index] > 0 ? "+"+timeGapArray[index]:timeGapArray[index]}</span></td>)
        }else{
          sum = sum + timeGapArray[index];
          tArr.push(<td class="rowTimeStamp" bgcolor={todayIndex == index+1 ? "#E6FFE6" : ""}><span className="timeGapFont">{sum > 0 ? "+"+sum : sum}</span></td>)
        }
      }
    };
    return tArr;
  };

  const transferPrettyTimeFormatted = (normalTime) => {
    let formattedPrev = normalTime.substr(0,2);
    if(formattedPrev.substr(0,1) == "0"){
      formattedPrev = formattedPrev.substr(1,1);
    }
    let formattedPost = normalTime.substr(2,2);
    return formattedPrev + ":" + formattedPost;
  }

  const getTimeOnly = (fullTimeExpression) => {
    return fullTimeExpression.substr(8,4);
  }
  
  useEffect(() => {
    if(window.localStorage.getItem("sabun")){    // 등록한 사번이 있으면, -> 출근부 보여줌
      setIsShowAttendanceBoard(true);
    }else{
      setIsShowAttendanceBoard(false);           // 사번이 없으면 -> 등록
    }

    setDays(get5days());
    setTodayIndex(moment().day());

    const getExceptionHandling = async () => {
      const handlingInfo = {
        todayYoil: moment().day(),
        sabun: userName.sabun
      }

      let result = await axios.post(BACK_END_URL+"/main/getExceptionHandling",handlingInfo);
      let exYoil = result.data.exceptionList.map(each => {
        return moment(each.workdate).day()-1;
      });

      let exType = result.data.exceptionList.map(each => {
        return each.handlingException;
      });
      
      setExYoil(exYoil);
      setExType(exType);
      resettingRef.current = true;
      setExceptionHandlingData(result.data.exceptionList);
    }

    getExceptionHandling();
  }, []);
  
  useEffect(()=>{
    if(resettingRef.current){
      console.log("exceptionHandlingData useEffect!");
      let todayInfo = {
        sabun: window.localStorage.getItem("sabun"),
        today: -1,
        yoil: moment().day()
      };
  
      const getWeekHistory = async () => {
        setTimeGapArray([]);  // 초기화 
        let result = await axios.post(BACK_END_URL+"/main/workhistory",todayInfo);
        console.log("result >> ", result.data);
        setUserName({name:result.data?.weekHistory[0]?.name, sabun: window.localStorage.getItem("sabun")});
        let wswc = [];
        let history = result.data.weekHistory;   
        for(let index = 0 ; index < history.length; index++){
          let element = {wstime:"", wctime:"", workdate:""};
          if(history[index].wstime){  
            element.wstime = transferPrettyTimeFormatted(getTimeOnly(history[index].wstime));
          }else{
            element.wstime = await getCoreTimeViolationStamp({name:history[0].name, theDay:history[index].workdate, violationType:"start"});
          }
          if(history[index].wctime){
            element.wctime = transferPrettyTimeFormatted(getTimeOnly(history[index].wctime));
          }else{
            element.wctime = await getCoreTimeViolationStamp({name:history[0].name, theDay:history[index].workdate, violationType:"end"});
          }
          element.workdate = history[index].workdate;
          wswc.push(element);
        }
        wswc.reverse();
        setWorkHistory(wswc);
        for(let index =0 ; index < wswc.length ; index++){
          let startTime = wswc[index].wstime;
          let endTime = wswc[index].wctime;
          let workdate = wswc[index].workdate;
    
          if(startTime != "기록없음" && endTime != "기록없음"){
            let startHour = Number(startTime.split(":")[0]);
            let startMinute = Number(startTime.split(":")[1]);
            let endHour = Number(endTime.split(":")[0]);
            let endMinute = Number(endTime.split(":")[1]);
            let totalStartMin = startHour * 60 + startMinute;
            let totalEndMin = endHour * 60 + endMinute;
            let timeGap = totalEndMin - totalStartMin -540;
            let filtered = exceptionHandlingData.filter(exhData => {
              return exhData.workdate == workdate
            })
            console.log(" filtered >>> ", filtered);
            if(filtered.length > 0){
              filtered.forEach(each =>{
                if(each.handlingException == "fd"){   // 패밀리 데이
                  console.log(" timeGap before >> ", timeGap);
                  timeGap = timeGap + 120;   //2시간
                  console.log(" timeGap after >> ", timeGap);
                }else if(each.handlingException == "hoff"){  // 반차
                  timeGap = timeGap + 240;   // 4시간 
                }else if(each.handlingException == "off"){   // 연차
                  timeGap = timeGap + 540;   // 9시간
                }else if(each.handlingException == "bt"){    // 출장, 외근
  
                }
              })
            }   
            setTimeGapArray(prev => [...prev, timeGap]);
          }else{
            setTimeGapArray(prev => [...prev, "X"]);
          }
        }
      }
      getWeekHistory();
    }

  },[exceptionHandlingData]);

  const getBtnUx = (gubun) => {
    let ux = []
    for(let i=0 ; i<5; i++){
      ux.push(<td class="rowTimeStamp" ><button className="btn" id={i} value={gubun} disabled={i > moment().day()-1} onClick={(ev) => {
        hanldeAttendanceException(gubun,i)
      }}>{exYoil.includes(i) && exType.includes(changeGubunToCode(gubun)) ? gubun+" 취소" : gubun}</button></td>);
    }
    return ux;
  }


  const changeGubunToCode = (gubun) => {
    let code = "";
    if(gubun == "패밀리데이"){
      code = "fd";
    }else if(gubun == "반차"){
      code = "hoff";
    }else if(gubun == "휴가"){
      code = "off";
    }else if(gubun == "외근 /출장"){
      code = "bt";
    }
    return code;
  }

  const hanldeAttendanceException = async (gubun, index) => {    
    
    const exceptionHandling = {
      workdate : workHistory[index]?.workdate,
      name: userName.name,
      sabun: userName.sabun,
      handlingException: changeGubunToCode(gubun) 
    }

    let addResult = await axios.post(BACK_END_URL+"/main/addExceptionHandling", exceptionHandling);
    console.log("addExceptionHandling result >> ", addResult);
    
    if(addResult.data.ok){
      let getResult = await axios.post(BACK_END_URL+"/main/getExceptionHandling",{todayYoil:moment().day(), sabun:userName.sabun});
      console.log(" getResult >> ", getResult.data);
      
      let exYoil = getResult.data.exceptionList.map(each => {
        return moment(each.workdate).day()-1;
      });

      let exType = getResult.data.exceptionList.map(each => {
        return each.handlingException;
      });
      resettingRef.current = true;
      setExYoil(exYoil);
      setExType(exType);
      setExceptionHandlingData(getResult.data.exceptionList);
    }

  };

  const attendanceBoard = () => {
    return (<div className="main">
    <div className="headingTitle">출퇴근 기록부</div>
    <table className="tableTop">
      <tr class="tableLong">
        <td class="tableRowNoBorder">날짜</td>
        <td class="tableRow" bgcolor={todayIndex == 1 ? "#E6FFE6" : ""}>{days[0]}</td>
        <td class="tableRow" bgcolor={todayIndex == 2 ? "#E6FFE6" : ""}>{days[1]}</td>
        <td class="tableRow" bgcolor={todayIndex == 3 ? "#E6FFE6" : ""}>{days[2]}</td>
        <td class="tableRow" bgcolor={todayIndex == 4 ? "#E6FFE6" : ""}>{days[3]}</td>
        <td class="tableRow" bgcolor={todayIndex == 5 ? "#E6FFE6" : ""}>{days[4]}</td>
      </tr>
      <tr class="tableLong">
        <td class="tableRowNoBorder">요일</td>
        <td class="tableRow" bgcolor={todayIndex == 1 ? "#E6FFE6" : ""}>월</td>
        <td class="tableRow" bgcolor={todayIndex == 2 ? "#E6FFE6" : ""}>화</td>
        <td class="tableRow" bgcolor={todayIndex == 3 ? "#E6FFE6" : ""}>수</td>
        <td class="tableRow" bgcolor={todayIndex == 4 ? "#E6FFE6" : ""}>목</td>
        <td class="tableRow" bgcolor={todayIndex == 5 ? "#E6FFE6" : ""}>금</td>
      </tr>
      <tr class="tableLong">
        <td class="tableRowNoBorder">출근</td>
        {
          getWeekHistoryUX("start")
        }

      </tr>
      <tr class="tableLong">
        <td class="tableRowNoBorder">퇴근</td>
        {
          getWeekHistoryUX("end")
        }
      </tr>
      <tr class="tableLong">
        <td class="tableRowNoBorder">초과<span className="minuteFont">(분)</span></td>
        {
          getWeekHistoryUX("over")
        }
      </tr>
      <tr class="tableLong">
        <td class="tableRowNoBorder">누적<span className="minuteFont">(분)</span></td>
        {
          getAccTime()
        }
      </tr>

      <tr class="tableLong">
        <td class="tableRowNoBorder" rowSpan={4}><span className="mr7">근태</span ><span className="mr7">예외</span><span className="mr7">처리</span></td>
        {
          getBtnUx("패밀리데이")
        }
      </tr>
      <tr class="tableLong">
      {
          getBtnUx("반차")
      }
      </tr>
      <tr class="tableLong">
      {
          getBtnUx("휴가")
      }
      </tr>
      <tr class="tableLong">
      {
          getBtnUx("외근 /출장")
      }
      </tr>
    </table>
  </div>) 
  }

  const loginBoard = () => {
    return (
      <div className="center1">
        <div className="vacantLayout"></div>
        <div>사번을 입력해주세요</div>
        <div className="flex1">
          <input type="text" className="inputBox" onChange={(ev) => {
            console.log(" ev ", ev.target.value);
            setSabun(ev.target.value)
          }
        } ></input>
          <button className="btn2" onClick={(ev) => {
            window.localStorage.setItem("sabun", sabun);
            setIsShowAttendanceBoard(true);
          }}>입력</button>
        </div>

      </div>
    );
  }

  if (moment().day() == 0 || moment().day() == 6) {
    return (
      <div className="main">
        <div>오늘은 주말 입니다. 출퇴근부 따위는 보지 마세요.</div>
      </div>
    );
  } else {
    if(isShowAttendanceBoard){
      return attendanceBoard();
    }else{
      return loginBoard();
    }
  }
};

export default Ham;
