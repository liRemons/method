/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2020-07-18 18:08:45
 * @LastEditors: Remons
 * @LastEditTime: 2020-07-19 18:50:56
 */

// 时间格式化
export const dateFormat = (input, type) => {
  function init(n) {
    return n < 10 ? '0' + n : n;
  }
  let date;
  if (input && typeof input == 'number') {
    date = new Date(input);
  } else if (input && typeof input == 'string') {
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
  if (type == 'yyyy/MM/dd HH:mm:ss') {
    value = `${y}/${M}/${d} ${h}:${m}:${s}`;
  } else if (type == 'yyyy/MM/dd') {
    value = `${y}/${M}/${d}`;
  } else if (type == 'yyyy-MM-dd') {
    value = `${y}-${M}-${d}`;
  } else if (type == 'HH:mm:ss') {
    value = `${h}:${m}:${s}`;
  } else if (type == 'yyyy年MM月dd日 HH时mm分ss秒') {
    value = `${y}年${M}月${d}日 ${h}时${m}分${s}秒`;
  }
  return value;
};

// 深拷贝
export const deepClone = (data) => {
  const checkType = (val) => {
    return Object.prototype.toString.call(val).slice(8, -1);
  };
  let BaseType = [
    'Null',
    'String',
    'Boolean',
    'Number',
    'Undefined',
    'Function',
  ];
  if (BaseType.includes(checkType(data))) {
    return data;
  }
  if (checkType(data) === 'RegExp') return new RegExp(data);
  if (checkType(data) === 'Date') return new Date(data);
  let newData = checkType(data) === 'Array' ? [] : {};
  for (let key in data) {
    newData[key] = deepClone(data[key]);
  }
  return newData;
};

// 数组对象去重
export const removeArrRepeat = (arr, attribute) => {
  if (arr.length && typeof (arr[0] !== 'object')) {
    return [...new Set(arr)];
  }
  let obj = {};
  arr = arr.reduce((cur, next) => {
    obj[next[attribute]] ? '' : (obj[next[attribute]] = true && cur.push(next));
    return cur;
  }, []); //设置cur默认类型为数组，并且初始值为空的数组
  return arr;
};

// 数组分组
export const arrGroup = (data, num) => {
  if (typeof num !== 'number') {
    console.error('The second parameter should be a number');
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
    console.error('The expected array, get' + type);
  }
  return data;
};

// 判断是不是手机端
export const IsPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

// 数组求和
export const SUM = (arr, attr) => {
  let type;
  arr.forEach((item, index) => {
    if (typeof item == 'number' || typeof item === 'string') {
      type = 'number';
      arr[index] = Number(item);
    }
  });
  if (type === 'number') {
    return arr.reduce((pre, cur) => pre + cur);
  } else {
    return arr.reduce((pre, cur) => pre + cur[attr], 0);
  }
};

// 下载
export const download = (url, type, name = '') => {
  const a = document.createElement('a');
  a.setAttribute('download', name);
  a.setAttribute('href', url);
  if (navigator.msSaveBlob) {
    let blob = Blob([url], { type: type });
    return navigator.msSaveBlob(blob, name);
  }
  a.click();
};

// 滚动条监听
export const watchScroll = (scrollFn, delay, el = window) => {
  if (!delay) delay = 1000;
  const debonce = (fn, delay) => {
    let timer = null;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, delay);
    };
  };
  el.onscroll = debonce(scrollFn, delay);
};

// 复制内容
export const copy = (text) => {
  if (typeof text === 'object') {
    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    document.execCommand('Copy', 'false', null);
    window.getSelection().empty();
  } else {
    const input = document.createElement('input');
    const body = document.querySelector('body');
    input.setAttribute('value', text);
    input.setAttribute('style', 'z-index:-1');
    body.appendChild(input);
    input.select();
    document.execCommand('copy');
    body.removeChild(input);
  }
};
// 预览图片
export const viewImg = (e = window.event) => {
  if (e.target.nodeName === 'IMG' && e.target.currentSrc) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.setAttribute(
      'style',
      `position: fixed;
      z-index: 2001;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      background: rgb(0 0 0 / 33%);
      height: 100%;
      top: 0;`
    );
    div.setAttribute('id', 'remons-view-box');
    img.setAttribute('src', e.target.currentSrc);
    img.setAttribute('style', 'max-height: 100%; max-weight: 100%');
    img.setAttribute('id', 'remons-view-img');
    document.body.appendChild(div);
    document.querySelector('#remons-view-box').appendChild(img);
    let imgBox = document.querySelector('#remons-view-box');
    if (imgBox) {
      imgBox.addEventListener('click', () => {
        document.body.removeChild(imgBox);
      });
    }
  }
};

export const openApp = ({ url, params }) => {
  if (url) {
    const newParams = new URLSearchParams(params);
    window.location = newParams.toString()
      ? `${url}?${newParams.toString()}`
      : url;
  } else {
    console.error('url 错误');
  }
};

export const getSearchParams = (name) => {
  const params = new URLSearchParams(decodeURI(window.location.search));
  const obj = {};
  const keys = [...params.keys()];
  keys.forEach((key) => {
    obj[key] = params.get(key);
  });
  return !name ? obj : params.get(name);
};

export const debounce = (fun, delay = 500) => {
  return (args) => {
    let _args = args;
    clearTimeout(fun.id);
    fun.id = setTimeout(() => {
      fun.call(this, _args);
    }, delay);
  };
};
