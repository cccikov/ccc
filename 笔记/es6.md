ECMAScript 6
------------------------------------

## 1.let-const-块级作用域

#### let

```javascript
{
    let a = 10;
    for (let i = 0; i < 10; i++) {
        //...
    }
}
```

* 不存在变量提升
* 暂时性锁死 - let命令声明变量之前，变量都不可以使用
* 不允许重复声明

#### 块级作用域
块级作用域与函数声明

```javascript
function f() {
    console.log('I am outside!');
}
(function() {
    if (false) {
        // 重复声明一次函数f
        function f() {
            console.log('I am inside!');
        }
    }
    f();
}());
```

|      | es5                                                                                | es6                                                                                                                                                                  |
|------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 规定 | 不能再块级作用域声明函数                                                           | 块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用                                                                                                |
| 实际 | 不报错,但是if语句里面不同浏览器会不同表现`inside`                                  | 函数声明类似于var，即会提升到<strong>全局作用域或函数作用域</strong>的头部;<br />同时，函数声明还会提升到所在的<strong>块级作用域</strong>的头部`f is not a function`|
| 严格 | 报错:函数声明无法嵌套在语句或块内。这些声明仅出现在顶级或直接出现在函数体内。      | 函数声明语句的行为类似于let，在块级作用域之外不可引用`outside`                                                                                                       |

#### const
const声明一个只读的常量。实质是变量指向的那个内存地址不得改动。

* 不存在变量提升
* 暂时性锁死 - let命令声明变量之前，变量都不可以使用
* 不允许重复声明

## 2.变量的解构赋值


#### 数组

```javascript
let [foo, [ [bar], baz ]] = [1, [ [2], 3 ]];
console.log(foo,bar,baz) // 1 2 3

let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```

#### 对象

```javascript
let {foo, bar} = { foo: "aaa", bar: "bbb" };
console.log(foo,bar);// "aaa" "bbb"

let {x,y:z=10} = {x:5};
console.log(x,z);//5 10
```

#### 字符串 数值 布尔值

字符串转换成了一个类似数组的对象

```javascript
let [a, b, c, d] = "hello";
console.log(a, b, c, d); //h e l l

let {length: len} = 'hello';
console.log(len) // 5
```

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```javascript
let {toString: a} = 123;
console.log(a === Number.prototype.toString); // true
console.log(a === (123).toString); // true

let {toString: b} = true;
console.log(b === Boolean.prototype.toString) // true
```

函数解构 参数的解构

```javascript
function add([x,y]){
    return x + y;
}
console.log(add([1,2]))//3

function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
```

## 3.字符串的扩展

JavaScript内部，字符以UTF-16的格式储存

#### 字符串表示

```javascript
\u{20bb7} // "𠮷"
```

#### codePointAt()
`codePointAt()`32位 - `charAt()`16位 Unicode 编码点值

```javascript
let str = "𠮷a";

for(let i of str){
    console.log(i.codePointAt(0).toString(16));
}//20bb7 61

function is32Bit(s){
    return s.codePointAt(0) > 0xffff;
}
```

## 6.数组的扩展

#### Array.from() 将类数组对象转化为数组

#### Array.of() 将一堆数值转化为数组

#### arr.copyWithin(目标索引, [源开始索引], [结束源索引(不包括)]) 从开始到结束(不包括结束)

#### find()遍历返回符合条件的第一个成员,findIndex()遍历返回符合条件的第一个位置

#### fill()方法使用给定值，填充一个数组

#### ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。详见《Iterator》

#### includes方法返回一个布尔值，表示某个数组是否包含给定的值.

#### 数组的空位