/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2020-07-18 18:08:45
 * @LastEditors: Remons
 * @LastEditTime: 2020-07-19 10:00:53
 */ 
/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2020-07-18 18:08:45
 * @LastEditors: Remons
 * @LastEditTime: 2020-07-19 10:00:24
 */
module.exports = {
  /**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
  dateFormat: function (input, type) {
    function init(n) {
      n < 10 ? (n = '0' + n) : ''
      return n
    }
    let date;
    if (input && typeof input == 'number') {
      date = new Date(input)
    } else if (input && typeof input == 'string') {
      date = new Date(parseInt(input))
    } else {
      date = new Date()
    }
    let y = date.getFullYear()
    let M = init(date.getMonth() + 1)
    let d = init(date.getDate())
    let h = init(date.getHours())
    let m = init(date.getMinutes())
    let s = init(date.getSeconds())
    let value = `${y}-${M}-${d} ${h}:${m}:${s}`
    if (type == 'yyyy/MM/dd HH:mm:ss') {
      value = `${y}/${M}/${d} ${h}:${m}:${s}`
    } else if (type == 'yyyy/MM/dd') {
      value = `${y}/${M}/${d}`
    } else if (type == 'HH:mm:ss') {
      value = `${h}:${m}:${s}`
    }
  }
}