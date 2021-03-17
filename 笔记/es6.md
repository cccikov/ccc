ECMAScript 6
------------------------------------

## 1.let-const-块级作用域

* let

    ```javascript
    {
        let a = 10;
        for (let i = 0; i < 10; i++) {
            //...
        }
    }
    ```

    - 不存在变量提升
    - 暂时性锁死 - let命令声明变量之前，变量都不可以使用
    - 不允许重复声明

* 块级作用域

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

* const

    const声明一个只读的常量。实质是变量指向的那个内存地址不得改动。

    - 不存在变量提升
    - 暂时性锁死 - let命令声明变量之前，变量都不可以使用
    - 不允许重复声明

* 顶层对象的属性

    顶层对象，在浏览器环境指的是`window`对象，在 Node 指的是`global`对象。ES5 之中，顶层对象的属性与全局变量是等价的。

    ``` javascript
    window.a = 1;
    a // 1

    a = 2;
    window.a // 2
    ```

    ES6 为了改变这一点，一方面规定，为了保持兼容性，`var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；

    另一方面规定，`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。

    ``` javascript
    var a = 1;
    // 如果在 Node 的 REPL 环境，可以写成 global.a
    // 或者采用通用方法，写成 this.a
    window.a // 1

    let b = 1;
    window.b // undefined
    ```

* globalThis 对象

    JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。




## 2.变量的解构赋值


* 数组

    ```javascript
    let [foo, [ [bar], baz ]] = [1, [ [2], 3 ]];
    console.log(foo,bar,baz) // 1 2 3

    let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
    ```

* 对象

    ```javascript
    let {foo, bar} = { foo: "aaa", bar: "bbb" };
    console.log(foo,bar);// "aaa" "bbb"

    let {x,y:z=10} = {x:5};
    console.log(x,z);//5 10
    ```

    - 默认值

        ``` javascript
        let { a: { b: c = 2 } = {} } = obj
        console.log(c) // 2
        ```

        ``` javascript
        let { a: { b: c = 2 } = { b: "上层默认值" } } = obj
        console.log(c) // 上层默认值
        ```

* 字符串 数值 布尔值

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

* 函数解构 参数的解构

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

* 字符串表示

    javascript里面的字符是使用双字节（字符以 UTF-16 的格式储存，每个字符固定为2个字节），如果用`\uxxxx`的形式只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

    但是采用`\uxxxx`表示不了，所以ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

    ```javascript
    '\u{20bb7}' // "𠮷"
    '\u{1F680}' === '\uD83D\uDE80' // true
    ```

    ps：一个字节八位，双字节即16位，所以最大的位数字`(2*2*2*2)*(2*2*2*2)  *  (2*2*2*2)*(2*2*2*2)` 即 `0xFFFF` 65535

* 字符串的遍历器接口

    由于码点超过 \uFFFF 的字符使用双字节表示的，所以这一个字的长度也是2

    ``` javascript
    "𠮷".length // 2
    ```

* 直接输入 U+2028 和 U+2029

* JSON.stringify() 的改造

    ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。

* 模板字符串

    模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

    模板字符串中嵌入变量，需要将变量名写在`${}`之中

    ``` javascript
    `${x} + ${y} = ${x + y}`
    ```

* 标签模板（不懂）

* 模板字符串的限制（和 标签模板 相关）

* codePointAt()

    `codePointAt()` 最多能返回 32位 Unicode 编码点值（大于 0xFFFF ），可以处理4个字节的字符（es6）
    `charCodeAt()` 只能返回 16位 Unicode 编码点值（小于等于0xFFFF），只能处理2个字节的字符（es5）

    codePointAt() 方法会正确返回 32 位的 UTF-16 字符的码点。对于那些两个字节储存的常规字符，它的返回结果与 charCodeAt() 方法相同

    ```javascript
    let str = "𠮷a";

    for(let i of str){
        console.log(i.codePointAt(0).toString(16));
    } //20bb7 61

    /* 是否四个字节组成 */
    function is32Bit(s){
        return s.codePointAt(0) > 0xFFFF;
    }
    ```

* String.fromCodePoint()

    `String.fromCodePoint()` 能处理大于 0xFFFF 的码点，返回字符串
    `String.fromCharCode()` 只能识别小于等于0xFFFF的码点，返回对应字符串

* String.raw()
* str.normalize()
* str.includes(), startsWith(), endsWith()
* str.repeat()
* str.padStart()，padEnd()
* str.trimStart()，trimEnd()
* str.matchAll()
* str.replaceAll()

## 6.数组的扩展

* Array.from() 将类数组对象转化为数组

* Array.of() 将一堆数值转化为数组

* arr.copyWithin(目标索引, [源开始索引], [结束源索引(不包括)]) 从开始到结束(不包括结束)

* find()遍历返回符合条件的第一个成员,findIndex()遍历返回符合条件的第一个位置

* fill()方法使用给定值，填充一个数组

* ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。详见《Iterator》

* includes方法返回一个布尔值，表示某个数组是否包含给定的值.

* 数组的空位

## 7.函数的扩展

* 函数参数的默认值

* rest参数

* 扩展运算符

* 严格模式

* name属性

* 箭头函数

    ```javascript
    // (参数1,参数2,...) => {函数体}
    // (参数1,参数2,...) => 返回值
    ```

    如果参数只有一个 可以不加 括号
    ```javascript
    // 参数 => {函数体}
    // 参数 => 返回值
    ```

    如果返回值是一个对象{}的时候
    ```javascript
    // (参数1,参数2,...) => (返回值)
    // 参数 => (返回值)
    ```

* 绑定this

* 尾调用优化

* 函数参数的尾逗号

for-of遍历得到的是值 , 属性值
for-in遍历得到的是索引 , 属性名

## 12. Symbol

作为对象属性 唯一

## 13. Set Map

set 类似数组结构，但是值唯一

map 可以用对象作为键（属性名）的对象