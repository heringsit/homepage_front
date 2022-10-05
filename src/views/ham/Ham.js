/* 스케줄 타입이 0일때는 정상근무 1일때는 휴일*/
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import moment from "moment";
// * moment는 개발 중단 및 번들 크기가 dayjs 보다 상대적으로 크기때문에 성능을 향상시킬 수 있는 dayjs로 교체함
import dayjs from "dayjs";
import "./Ham.css";
import "react-toastify/dist/ReactToastify.css";

const Ham = () => {
  const [todayIndex, setTodayIndex] = useState(-1);
  const [sabun, setSabun] = useState("");
  const [exYoil, setExYoil] = useState([]);
  const [exType, setExType] = useState([]);
  const [exceptionHandlingData, setExceptionHandlingData] = useState([]);
  const [days, setDays] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);
  const [schedule, setSchedule] = useState(0);

  const [time, setTime] = useState("");
  const [isShowAttendanceBoard, setIsShowAttendanceBoard] = useState(false);
  const [userName, setUserName] = useState({
    name: "",
    sabun: window.localStorage.getItem("sabun"),
  });
  const [timeGapArray, setTimeGapArray] = useState([]);
  const resettingRef = useRef(false);

  // const BACK_END_URL = "http://52.79.53.196:3400";
  const BACK_END_URL = "https://ham.heringsglobal.com";
  // const BACK_END_URL = "http://localhost:3400";

  // * 날짜 나열
  const get5days = () => {
    let fiveDays = [];
    if (dayjs().day() === 1) {
      // 월요일
      fiveDays.push(dayjs().format("MM/DD"));
      fiveDays.push(dayjs().add(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().add(2, "d").format("MM/DD"));
      fiveDays.push(dayjs().add(3, "d").format("MM/DD"));
      fiveDays.push(dayjs().add(4, "d").format("MM/DD"));
    } else if (dayjs().day() === 2) {
      // 화요일
      fiveDays.push(dayjs().subtract(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().format("MM/DD"));
      fiveDays.push(dayjs().add(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().add(2, "d").format("MM/DD"));
      fiveDays.push(dayjs().add(3, "d").format("MM/DD"));
    } else if (dayjs().day() === 3) {
      fiveDays.push(dayjs().subtract(2, "d").format("MM/DD"));
      fiveDays.push(dayjs().subtract(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().format("MM/DD"));
      fiveDays.push(dayjs().add(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().add(2, "d").format("MM/DD"));
    } else if (dayjs().day() === 4) {
      fiveDays.push(dayjs().subtract(3, "d").format("MM/DD"));
      fiveDays.push(dayjs().subtract(2, "d").format("MM/DD"));
      fiveDays.push(dayjs().subtract(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().format("MM/DD"));
      fiveDays.push(dayjs().add(1, "d").format("MM/DD"));
    } else if (dayjs().day() === 5) {
      fiveDays.push(dayjs().subtract(4, "d").format("MM/DD"));
      fiveDays.push(dayjs().subtract(3, "d").format("MM/DD"));
      fiveDays.push(dayjs().subtract(2, "d").format("MM/DD"));
      fiveDays.push(dayjs().subtract(1, "d").format("MM/DD"));
      fiveDays.push(dayjs().format("MM/DD"));
    }
    return fiveDays;
  };

  const getCoreTimeViolationStamp = async (info) => {
    let result = await axios.post(
      BACK_END_URL + "/main/coretimeViolation",
      info,
      // * 소속-이름 오늘날짜 violationType 가져옴
      console.log(info, "info")
    );

    console.log("timeStamp >> ", result.data);
    let returnData = "";
    // * result.data.ok가 True면 타임스탬프 가져옴 False면 "-" 출력
    if (result.data.ok) {
      returnData = transferPrettyTimeFormatted(
        getTimeOnly(result.data.timeStamp)
      );
    } else {
      returnData = "-";
    }
    return returnData;
  };

  // *  분을 시간형식으로 변환
  const HourToMinute = (d) => {
    Number(d);

    d *= 60;
    // 시
    const h = Math.floor(d / 3600);
    // 분
    const m = Math.floor((d % 3600) / 60);

    // 시간 마이너스(-) 일때,
    const o = Math.ceil(d / 3600);
    const o2 = Math.ceil((d % 3600) / 60);

    const hDisplay =
      h >= 0 ? String(h).padStart(2, "0") + (h === 1 ? ":" : ":") : "";
    const mDisplay =
      m >= 0 ? String(m).padStart(2, "0") + (m === 1 ? "" : "") : "";

    // 시간 마이너스(-) 일때,
    const ohDisplay = o < 0 ? o + (o === 1 ? ":" : ":") : "-0:";
    const omDisplay = String(
      Math.abs(o2 < 0 ? o2 + (o2 === 1 ? "" : "") : "")
    ).padStart(2, "0");

    if (h >= 0 && m >= 0) {
      return hDisplay + mDisplay;
    } else {
      return ohDisplay + omDisplay;
    }
    // return hDisplay + mDisplay + oDisplay + o2Display;
  };

  // * 오늘날짜 해당 열 색으로 표현
  const getWeekHistoryUX = (gubun) => {
    return workHistory.map((work, index) => {
      let startTime = workHistory[index].wstime;
      let endTime = workHistory[index].wctime;
      // * 출근시간
      if (gubun === "start") {
        // * 지각체크! 길이가 4이면 0:00 5이면 00:00 따라서 길이가 4이면 10시 전 5이면 10시 후가 된다.
        if (startTime.length <= 4) {
          return (
            <td
              class="rowTimeStamp"
              bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
            >
              {startTime}
            </td>
          );
        } else {
          return (
            <td
              class="rowTimeStamp2"
              bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
            >
              {startTime}
            </td>
          );
        }

        // * 퇴근시간
      } else if (gubun === "end") {
        return (
          <td
            class="rowTimeStamp"
            bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
          >
            {endTime}
          </td>
        );
        // *  휴일?
      } else if (gubun === "over" && startTime.length > 2) {
        return (
          <td
            class="rowTimeStamp"
            // * 초과부분
            bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
          >
            <span className="timeGapFont">
              {timeGapArray[index] > 0 || timeGapArray[index] + 480 >= 0
                ? "+" + HourToMinute(timeGapArray[index] + 480)
                : HourToMinute(timeGapArray[index] + 480)}
            </span>
          </td>
        );
      } else {
        return (
          // * 기록없는 초과부분
          <td
            class="rowTimeStamp"
            bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
          >
            -
          </td>
        );
      }
    });
  };

  // * 누적(분) 파트
  const getAccTime = () => {
    let tArr = [];
    let sum = 0;
    for (let index = 0; index < timeGapArray.length; index++) {
      // !
      if (
        timeGapArray[index] === schedule &&
        timeGapArray[index] !== schedule
      ) {
        tArr.push(
          <td
            // * 근태예외처리 파트

            class="rowTimeStamp"
            bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
          >
            <span className="exceptionFont">근태 예외 처리 필요</span>
          </td>
        );
      } else {
        // ? 휴무 누적 예외처리
        if (timeGapArray[index] === 0 || timeGapArray[index] === 1) {
          // * 버튼 클릭시 값이 1로 증가해서 0으로 고정
          timeGapArray[index] = 0;
          sum = 480 + sum;
          tArr.push(
            <td
              class="rowTimeStamp"
              bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
            >
              <span className="timeGapFont">
                {sum > 0 ? "+" + HourToMinute(sum) : HourToMinute(sum)}
              </span>
            </td>
          );
        } else if (index === 0 && timeGapArray[0] + 480 < 0) {
          // * 총 누적시간(실제 근무시간 40시간을 기준으로)으로 나타내기 위해 sum에 8시간(480분)을 더해준다.
          // * 월요일
          sum = timeGapArray[0] + 540;
          tArr.push(
            <td
              class="rowTimeStamp"
              bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
            >
              <span className="timeGapFont">
                {sum > 0 ? "+" + HourToMinute(sum) : HourToMinute(sum)}
              </span>
            </td>
          );
        } else if (index === 0 && timeGapArray[0] + 480 >= 0) {
          sum = timeGapArray[0] + 480;
          tArr.push(
            <td
              class="rowTimeStamp"
              bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
            >
              <span className="timeGapFont">
                {sum > 0 ? "+" + HourToMinute(sum) : HourToMinute(sum)}
              </span>
            </td>
          );
        } else {
          // * 총 누적시간(실제 근무시간 40시간을 기준으로)으로 나타내기 위해 sum에 8시간(480분)을 더해준다.
          if (timeGapArray[index] + 480 >= 0) {
            sum = 480 + timeGapArray[index] + sum;

            tArr.push(
              <td
                class="rowTimeStamp"
                bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
              >
                <span className="timeGapFont">
                  {/* {dayjs.duration(wc.diff(startTime)).asMinutes()} */}
                  {sum >= 0 ? "+" + HourToMinute(sum) : HourToMinute(sum)}
                </span>
              </td>
            );
          } else {
            // * 만약 근무시간이 1시간 미만인 상태에서는 60분이 안넘기 때문에  전 날 누적시간이
            //* 17시 50분이라고 가정하고 오늘날 근무를 30분 한 상태라면 18시 20분이 되어야 맞지만 시간을 넘겨줄때 30분으로 넘겨주기 때문에
            //* 17시 20분이 출력된다 따라서 60분 미만일때는 8시간(480분)이 아니라 9시간(540분)을 sum에 더해준다.
            sum = 540 + sum + timeGapArray[index];

            tArr.push(
              <td
                class="rowTimeStamp"
                bgcolor={todayIndex === index + 1 ? "#ffcc99" : ""}
              >
                <span className="timeGapFont">
                  {sum >= 0 ? "+" + HourToMinute(sum) : HourToMinute(sum)}
                </span>
              </td>
            );
          }
        }
      }
    }
    return tArr;
  };

  const transferPrettyTimeFormatted = (normalTime) => {
    // * 시간 자릿수?
    let formattedPrev = normalTime.substr(0, 2);
    if (formattedPrev.substr(0, 1) === "0") {
      formattedPrev = formattedPrev.substr(1, 1);
    }
    let formattedPost = normalTime.substr(2, 2);
    return formattedPrev + ":" + formattedPost;
  };

  const getTimeOnly = (fullTimeExpression) => {
    return fullTimeExpression.substr(8, 4);
  };

  useEffect(() => {
    if (window.localStorage.getItem("sabun")) {
      // * 등록한 사번이 있으면, -> 출근부 보여줌
      setIsShowAttendanceBoard(true);
    } else {
      setIsShowAttendanceBoard(false); // * 사번이 없으면 -> 등록
    }

    setDays(get5days());
    setTodayIndex(dayjs().day());

    // * 요일이랑 사번 가져옴
    const getExceptionHandling = async () => {
      const handlingInfo = {
        todayYoil: dayjs().day(),
        sabun: userName.sabun,
      };

      let result = await axios.post(
        BACK_END_URL + "/main/getExceptionHandling",
        handlingInfo
      );
      let exYoil = result.data.exceptionList.map((each) => {
        return dayjs(each.workdate).day() - 1;
      });

      let exType = result.data.exceptionList.map((each) => {
        return each.handlingException;
      });

      // * set해서 가져온 데이터 넣어줌
      setExYoil(exYoil);
      setExType(exType);

      resettingRef.current = true;
      setExceptionHandlingData(result.data.exceptionList);
    };

    getExceptionHandling();
  }, [userName.sabun]);

  useEffect(() => {
    if (resettingRef.current) {
      console.log("exceptionHandlingData useEffect!");
      let todayInfo = {
        sabun: window.localStorage.getItem("sabun"),
        today: -1,
        yoil: dayjs().day(),
      };
      // * 한주간 출퇴근 기록을 가져온다.
      const getWeekHistory = async () => {
        setTimeGapArray([]); // 초기화
        let result = await axios.post(
          BACK_END_URL + "/main/workhistory",
          todayInfo
        );

        // ! 여기서 스케줄타입
        // * 스케줄 타입 따라서 실행부분(스케줄타입이 휴일에도 0으로 넘어와서 wstime 시간 여부로 조건 사용함)
        result.data.weekHistory.forEach(function (weekHistory) {
          if (weekHistory.wstime === "") {
            weekHistory.scheduleType = 1;
            setSchedule(weekHistory.scheduleType);
          } else {
            weekHistory.scheduleType = 0;
          }
        });

        console.log("result >> ", result.data);
        setUserName({
          name: result.data?.weekHistory[0]?.name,
          sabun: window.localStorage.getItem("sabun"),
        });
        let wswc = [];
        let history = result.data.weekHistory;
        for (let index = 0; index < history.length; index++) {
          let element = { wstime: "", wctime: "", workdate: "" };
          if (history[index].wstime) {
            element.wstime = transferPrettyTimeFormatted(
              getTimeOnly(history[index].wstime)
            );
          } else {
            element.wstime = await getCoreTimeViolationStamp({
              name: history[0].name,
              theDay: history[index].workdate,
              violationType: "start",
            });
          }
          if (history[index].wctime) {
            element.wctime = transferPrettyTimeFormatted(
              getTimeOnly(history[index].wctime)
            );
          } else {
            element.wctime = await getCoreTimeViolationStamp({
              name: history[0].name,
              theDay: history[index].workdate,
              violationType: "end",
            });
          }
          element.workdate = history[index].workdate;
          wswc.push(element);
        }
        wswc.reverse();
        setWorkHistory(wswc);
        for (let index = 0; index < wswc.length; index++) {
          let startTime = wswc[index].wstime;
          let endTime = wswc[index].wctime;
          let workdate = wswc[index].workdate;

          if (startTime !== "-" && endTime !== "-") {
            let startHour = Number(startTime.split(":")[0]);
            let startMinute = Number(startTime.split(":")[1]);
            let endHour = Number(endTime.split(":")[0]);
            let endMinute = Number(endTime.split(":")[1]);
            let totalStartMin = startHour * 60 + startMinute;
            let totalEndMin = endHour * 60 + endMinute;
            let timeGap = totalEndMin - totalStartMin - 540;
            let filtered = exceptionHandlingData.filter((exhData) => {
              return exhData.workdate === workdate;
            });
            console.log(" filtered >>> ", filtered);
            // !
            if (filtered.length > 0) {
              filtered.forEach((each) => {
                if (each.handlingException === "fd") {
                  console.log(timeGap, "timeGap");

                  // ! 패밀리 데이
                  // * 1시 이후 출근, 12시 이전 퇴근(점심시간 해당 x)
                  if (
                    (timeGapArray[index] + 480 >= 0 && startHour === 1) ||
                    (timeGapArray[index] + 480 >= 0 && endHour <= 11)
                  ) {
                    timeGap = timeGap + 180;
                  }
                  // * 12시 이후 출근(점심시간 안에 출근)
                  else if (timeGapArray[index] + 480 >= 0 && startHour === 12) {
                    timeGap = timeGap + 120 - (60 - startMinute);
                  }
                  // * 12시대에 퇴근(보통처럼 점심시간 1시간을 다 빼는것이 아니라 12~1시 사이의 시간 만큼만 실근무시간에서 빼준다.)+(누적시간은 점심시간 1시간이 빠진 상태이기 때문에 2시간이 아닌 3시간 추가에서 12시부터 1시 사이에 시간 만큼만 빼준다.)
                  else if (timeGapArray[index] + 480 >= 0 && endHour === 12) {
                    timeGap = timeGap + 180 - endMinute;
                  }
                  // * 기본
                  else if (timeGapArray[index] + 480 >= 0) {
                    console.log(" timeGap before >> ", timeGap);
                    timeGap = timeGap + 120; //2시간
                    console.log(" timeGap after >> ", timeGap);
                  }
                  // * 출근 후 1시간 미만일때(누적시간도 1시간 미만일때 1시간을 추가해서 더해줬으므로 여기서도 같게한다.)
                  else {
                    timeGap = timeGap + 180;
                  }
                } else if (each.handlingException === "hoff") {
                  console.log(timeGap, "timeGap");

                  // ! 반차
                  // * 1시 이후 출근, 12시 이전 퇴근(점심시간 해당 x)
                  if (
                    (timeGapArray[index] + 480 >= 0 && startHour === 1) ||
                    (timeGapArray[index] + 480 >= 0 && endHour <= 11)
                  ) {
                    timeGap = timeGap + 300;
                  } // * 12시 이후 출근(점심시간 안에 출근)
                  else if (timeGapArray[index] + 480 >= 0 && startHour === 12) {
                    timeGap = timeGap + 240 - (60 - startMinute);
                  }
                  // * 12시대에 퇴근(보통처럼 점심시간 1시간을 다 빼는것이 아니라 12~1시 사이의 시간 만큼만 실근무시간에서 빼준다.)+(누적시간은 점심시간 1시간이 빠진 상태이기 때문에 2시간이 아닌 3시간 추가에서 12시부터 1시 사이에 시간 만큼만 빼준다.)
                  else if (timeGapArray[index] + 480 >= 0 && endHour === 12) {
                    timeGap = timeGap + 300 - endMinute;
                  }
                  // *  기본
                  else if (timeGapArray[index] + 480 >= 0) {
                    console.log(" timeGap before >> ", timeGap);
                    timeGap = timeGap + 240; //4시간
                    console.log(" timeGap after >> ", timeGap);
                  }
                  // * 출근 후 1시간 미만일때(누적시간도 1시간 미만일때 1시간을 추가해서 더해줬으므로 여기서도 같게한다.)
                  else {
                    timeGap = timeGap + 300;
                  }
                } else if (each.handlingException === "off") {
                  // ! 연차
                  // todo 연차 기존 540(9시간) 에서 480(8시간)으로 수정함
                  if (timeGapArray[index] + 480 >= 0) {
                    timeGap = timeGap + 480; //8시간
                  }
                  // * 출근 후 1시간 미만일때(누적시간도 1시간 미만일때 1시간을 추가해서 더해줬으므로 여기서도 같게한다.)
                  else {
                    timeGap = timeGap + 540;
                  }
                }
                // else if (each.handlingException === "bt") {
                //   // ! 출장, 외근
                // }
              });
            }
            setTimeGapArray((prev) => [...prev, timeGap]);
          } else {
            setTimeGapArray((prev) => [...prev, schedule]);
          }
        }
      };
      getWeekHistory();
    }
  }, [exceptionHandlingData]);

  // * 근태 예외 처리 버튼들
  const getBtnUx = (gubun) => {
    let ux = [];

    for (let i = 0; i < 5; i++) {
      ux.push(
        <td class="rowTimeStamp">
          <button
            className="btn"
            id={i}
            value={gubun}
            disabled={i > dayjs().day() - 1}
            onClick={(ev) => {
              hanldeAttendanceException(gubun, i);
            }}
          >
            {exYoil.includes(i) && exType.includes(changeGubunToCode(gubun))
              ? gubun + " 취소"
              : gubun}
          </button>
        </td>
      );
    }
    return ux;
  };

  // * 근태 예외 처리 버튼들
  const changeGubunToCode = (gubun) => {
    let code = "";
    if (gubun === "패밀리데이") {
      code = "fd";
    } else if (gubun === "반차") {
      code = "hoff";
    } else if (gubun === "연차") {
      code = "off";
    }
    // else if (gubun === "외근 /출장") {
    //   code = "bt";
    // }
    return code;
  };

  // * ???????????
  const hanldeAttendanceException = async (gubun, index) => {
    const exceptionHandling = {
      workdate: workHistory[index]?.workdate,
      name: userName.name,
      sabun: userName.sabun,
      handlingException: changeGubunToCode(gubun),
    };

    let addResult = await axios.post(
      BACK_END_URL + "/main/addExceptionHandling",
      exceptionHandling
    );
    console.log("addExceptionHandling result >> ", addResult);

    if (addResult.data.ok) {
      let getResult = await axios.post(
        BACK_END_URL + "/main/getExceptionHandling",
        { todayYoil: dayjs().day(), sabun: userName.sabun }
      );
      console.log(" getResult >> ", getResult.data);

      let exYoil = getResult.data.exceptionList.map((each) => {
        return dayjs(each.workdate).day() - 1;
      });

      let exType = getResult.data.exceptionList.map((each) => {
        return each.handlingException;
      });

      resettingRef.current = true;
      setExYoil(exYoil);
      setExType(exType);
      setExceptionHandlingData(getResult.data.exceptionList);
    }
  };

  useEffect(() => {
    let sum = 0;
    let time = 0;

    for (let index = 0; index < timeGapArray.length; index++) {
      // * 월요일엔 초과시간에 + 8시간을 40시간에서 뺀다.
      if (index === 0 && timeGapArray[0] + 480 < 0) {
        sum = timeGapArray[0] + 540;
        time = 2400 - sum;
      } else if (index === 0 && timeGapArray[0] + 480 >= 0) {
        sum = timeGapArray[0] + 480;
        time = 2400 - sum;
      } else if (timeGapArray[index] + 480 >= 0) {
        // * 실제 시간은 9시간(540분)이기 때문에 540을 더해준다.
        sum = sum + 540 + timeGapArray[index];
        // * 화요일 부터는 60씩 즉 1시간씩 추가해가며 총 누적시간을 40시간에서 빼준다.
        // * 40시간(2400분)에 하루마다 + 1시간(60분, 점심시간)
        time = 2400 + index * 60 - sum;
      } else {
        // * 실제 시간은 9시간(540분)이기 때문에 540을 더해준다.
        sum = sum + 540 + timeGapArray[index];
        // * 화요일 부터는 60씩 즉 1시간씩 추가한다
        // * 현재 근무시간이 1시간 미만일때는 누적시간에 1시간을 더해주고 있기때문에 여기서는 2400분이 아니라 2340분으로 계산해 값을 맞춰준다.
        time = 2340 + index * 60 - sum;
      }
    }
    if (time >= 0) {
      setTime(
        <span role="img" aria-label="" className="fonts">
          ☕️ 총 근무시간이 <span className="blue">40시간</span> 중
          <span className="red"> {HourToMinute(time)}</span>
          시간 남았습니다. <span className="rightgray">(점심시간 포함)</span>
        </span>
      );
    } else {
      setTime(
        <span role="img" className="fonts" aria-label="">
          🍀 근무시간이 남아있지 않아요 🍀
        </span>
      );
    }
  }, [timeGapArray]);

  const attendanceBoard = () => {
    return (
      <div className="main">
        <div className="headingTitle">
          <span role="img" className="fonts" aria-label="" aria-labelledby="">
            출퇴근 지킴이 🚙
          </span>
          <img className="logo" alt="herings" src="img/herings_logo2.png" />
        </div>

        <table className="tableTop">
          <tr class="tableLong">
            <td class="tableRowNoBorder">날짜</td>
            <td class="tableRow" bgcolor={todayIndex === 1 ? "#ffcc99" : ""}>
              {days[0]}
            </td>
            <td class="tableRow" bgcolor={todayIndex === 2 ? "#ffcc99" : ""}>
              {days[1]}
            </td>
            <td class="tableRow" bgcolor={todayIndex === 3 ? "#ffcc99" : ""}>
              {days[2]}
            </td>
            <td class="tableRow" bgcolor={todayIndex === 4 ? "#ffcc99" : ""}>
              {days[3]}
            </td>
            <td class="tableRow" bgcolor={todayIndex === 5 ? "#ffcc99" : ""}>
              {days[4]}
            </td>
          </tr>
          <tr class="tableLong">
            <td class="tableRowNoBorder">요일</td>
            <td class="tableRow" bgcolor={todayIndex === 1 ? "#ffcc99" : ""}>
              월
            </td>
            <td class="tableRow" bgcolor={todayIndex === 2 ? "#ffcc99" : ""}>
              화
            </td>
            <td class="tableRow" bgcolor={todayIndex === 3 ? "#ffcc99" : ""}>
              수
            </td>
            <td class="tableRow" bgcolor={todayIndex === 4 ? "#ffcc99" : ""}>
              목
            </td>
            <td class="tableRow" bgcolor={todayIndex === 5 ? "#ffcc99" : ""}>
              금
            </td>
          </tr>
          <tr class="tableLong">
            <td class="tableRowNoBorder">출근</td>
            {getWeekHistoryUX("start")}
          </tr>
          <tr class="tableLong">
            <td class="tableRowNoBorder">퇴근</td>
            {getWeekHistoryUX("end")}
          </tr>
          <tr class="tableLong">
            <td class="tableRowNoBorder">
              당일<span className="minuteFont">(분)</span>
            </td>
            {getWeekHistoryUX("over")}
          </tr>
          <tr class="tableLong">
            <td class="tableRowNoBorder">
              누적<span className="minuteFont">(분)</span>
            </td>
            {getAccTime()}
          </tr>
          <tr class="tableLong">
            <td class="tableRowNoBorder" rowSpan={4}>
              <span className="mr7">근태</span>
              <span className="mr7">예외</span>
              <span className="mr7">처리</span>
            </td>
            {getBtnUx("패밀리데이")}
          </tr>

          <tr class="tableLong">{getBtnUx("반차")}</tr>

          <tr class="tableLong">{getBtnUx("연차")}</tr>
          {/* <tr class="tableLong">{getBtnUx("외근 /출장")}</tr> */}
        </table>
        <div className="worktime">
          <span>{time}</span>
        </div>
      </div>
    );
  };

  const loginBoard = () => {
    return (
      <div className="center1">
        <div className="vacantLayout"></div>
        <div>사번을 입력해주세요</div>
        <div className="flex1">
          <input
            type="text"
            className="inputBox"
            onChange={(ev) => {
              console.log(" ev ", ev.target.value);
              setSabun(ev.target.value);
            }}
          ></input>
          <button
            className="btn2"
            onClick={(ev) => {
              window.localStorage.setItem("sabun", sabun);
              console.log(" ev ", ev.target.value);
              setIsShowAttendanceBoard(true);
            }}
          >
            입력
          </button>
        </div>
      </div>
    );
  };

  if (dayjs().day() === 0 || dayjs().day() === 6) {
    return (
      <div className="main">
        <div>오늘은 주말 입니다. 출퇴근부 따위는 보지 마세요.</div>
      </div>
    );
  } else {
    if (isShowAttendanceBoard) {
      return attendanceBoard();
    } else {
      return loginBoard();
    }
  }
};

export default Ham;
