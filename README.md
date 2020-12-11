<!--
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2020-07-18 18:06:06
 * @LastEditors: Remons
 * @LastEditTime: 2020-07-19 19:04:20
--> 
# method

#### 介绍
一些公共方法

#### 软件架构
软件架构说明


#### 安装教程

1.  `npm i methods-r`

#### 使用说明

1. 引入：  `import methods from 'methods-r'`
2. 使用：`methods.函数名(参数)`

#### 函数说明 (* 为必填)

##### 时间格式化 `dateFormat( input | type )` 
   1. `input (String | Number)`： `时间戳，为空获取当前时间`
   2. `type (String) 可选值`：`yyyy/MM/dd HH:mm:ss` `yyyy/MM/dd` `HH:mm:ss` `yyyy-MM-dd` `yyyy年MM月dd日 HH时mm分ss秒`
   
##### 深拷贝 `deepClone( obj )` 
1. 任意参数
   
##### 数组对象去重 `removeArrRepeat( arr,attribute )`
1. `arr (Array)`:`数组对象`
2. `attribute (String)`:`*根据参数去重`
   
##### 数组求和 `arrSUM ( data ) `
1. `data(Array)`:`*数字数组`
   
##### 数组铺平 `arrFlat ( data )`
1. `data(Array)`:`*一维或多维数组`
   
##### 数组分组 `arrGroup( data , num)`
1. `data(Array)`:`*所要分组的数组`
2. `num(Number)`:`*几个分成一组`

##### 是否为PC端 `*IsPC()`

##### 数组求和 `SUM( data , attr )`
1. `data(Array)`:`*数组`
2. `attr(String)`:`数组求和所依据的属性；如果是数组对象，则必填`

##### 下载 `download( url , type , name)`
1. `url(String)`:`*当前下载的URL`
2. `type(String)`:`文件类型，IE下使用`
3. `name(String)`: `文件名称`


##### 监听滚动条事件 `watchScroll( fn , delay ,el )`
1. `fn(function) : *传递函数，会触发此函数`
2. `delay(Number): 防抖，默认 1 s 触发一次，单位（ms）`
3. `el(Element):监听滚动条元素，默认window`


##### 复制 `copy( value )`
1. `value( 基本类型 )`