/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2020-07-18 18:08:45
 * @LastEditors: Remons
 * @LastEditTime: 2020-07-19 18:50:56
 */

// 时间格式化
function dateFormat(input, type) {
  function init(n) {
    return n < 10 ? "0" + n : n;
  }
  let date;
  if (input && typeof input == "number") {
    date = new Date(input);
  } else if (input && typeof input == "string") {
    date = new Date(parseInt(input));
  } else {
    date = new Date();
  }
  let y = date.getFullYear();
  let M = init(date.getMonth() + 1);
  let d = init(date.getDate());
  let h = init(date.getHours());
  let m = init(date.getMinutes());
  let s = init(date.getSeconds());
  let value = `${y}-${M}-${d} ${h}:${m}:${s}`;
  if (type == "yyyy/MM/dd HH:mm:ss") {
    value = `${y}/${M}/${d} ${h}:${m}:${s}`;
  } else if (type == "yyyy/MM/dd") {
    value = `${y}/${M}/${d}`;
  } else if (type == "yyyy-MM-dd") {
    value = `${y}-${M}-${d}`;
  } else if (type == "HH:mm:ss") {
    value = `${h}:${m}:${s}`;
  }
  return value;
}

// 深拷贝
function deepClone(obj) {
  var target = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object") {
        target[key] = deepClone(obj[key]);
      } else {
        target[key] = obj[key];
      }
    }
  }
  return target;
}

// 数组对象去重
function removeArrRepeat(arr, attribute) {
  let obj = {};
  arr = arr.reduce((cur, next) => {
    obj[next[attribute]] ? "" : (obj[next[attribute]] = true && cur.push(next));
    return cur;
  }, []); //设置cur默认类型为数组，并且初始值为空的数组
  return arr;
}

// 数组求和
function arrSUM(data) {
  return data.reduce((total, value) => {
    return total + value;
  });
}

//数组铺平
function arrFlat(data) {
  if (data instanceof Array) {
    data.forEach((item) => {
      if (item instanceof Array) {
        item = arrFlat(item);
      } else {
        data = data.flat();
      }
    });
  }
  return data;
}

// 数组分组
function arrGroup(data, num) {
  if (typeof num !== "number") {
    console.error("The second parameter should be a number");
    return;
  }
  if (data instanceof Array) {
    let result = [];
    for (var i = 0, len = data.length; i < len; i += num) {
      result.push(data.slice(i, i + num));
    }
    return result;
  } else {
    let type = typeof data;
    console.error("The expected array, get" + type);
  }
  return data;
}

// 判断是不是手机端
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 数组求和
function SUM(arr, attr) {
  let type;
  arr.forEach((item) => {
    if (typeof item == "number") {
      type = "number";
    }
  });
  if (type === "number") {
    return arr.reduce((pre, cur) => pre + cur);
  } else {
    return arr.reduce((pre, cur) => pre + cur[attr], 0);
  }
}

module.exports = {
  dateFormat,
  deepClone,
  removeArrRepeat,
  arrSUM,
  arrFlat,
  arrGroup,
  IsPC,
  SUM,
};
