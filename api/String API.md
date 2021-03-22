# js API

- [复制操作](#复制)

``` javascript

    // 提取字符串(可负)
    str.slice([beginSlice[, endSlice]])

    // 提取字符串
    str.substring([indexStart[, indexEnd]])

    // 提取字符串
    str.substr([start = 0[, length = str.length]])

    // 转为数组
    str.split([separator[, limit]])

    // 返回索引字符
    str.charAt(index = 0)

    // 返回索引字符的Unicode码值
    str.charCodeAt(index = 0)

    // 检索
    str.indexOf(searchValue[, fromIndex = 0]);

    // 尾部检索
    str.lastIndexOf(searchValue[, fromIndex = 0]);

    // 小写
    str.toLowerCase();

    // 大写
    str.toUpperCase();

    // 替换
    str.replace();

    // 检索匹配项
    str.match(regexp);

    // 去除两端空格
    str.trim()

    /* es6 */

    // 加强版 charCodeAt 返回索引字符的Unicode码值
    str.codePointAt(index = 0) //
```

## String

#### 复制

* **str.slice**

    提取一个字符串的一部分，并返回一新的字符串。(可以是负数)

    提取从 beginSlice 到 endSlice（不包括）之间的字符。

    ``` javascript
        str.slice([beginSlice[, endSlice]])
    ```

    - beginSlice

        可选，默认值为0。从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)

    - endSlice

        可选，默认值为str.length。在该索引（以 0 为基数）处结束提取字符串(不包括endSlice)。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。

* str.substring

    提取从 indexStart 到 indexEnd（不包括）之间的字符。

    ``` javascript
        str.substring([indexStart[, indexEnd]])
    ```

    - indexStart

        可选，默认值为0。一个 0 到字符串长度之间的整数。

    - indexEnd

        可选，默认值为str.length。一个 0 到字符串长度之间的整数。

    如果 indexStart 等于 indexEnd，substring 返回一个空字符串。

    如果省略 indexEnd，substring 提取字符一直到字符串末尾。

    如果任一参数小于 0 或为 NaN，则被当作 0。

    如果任一参数大于 stringName.length，则被当作 stringName.length。

    如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。

* **str.substr**

    返回一个字符串中从指定位置开始到指定字符数的字符。（可以是负数）

    ``` javascript
        str.substr([start = 0[, length = str.length]])
    ```

#### 其他

* **str.split**

    使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。返回源字符串以分隔符出现位置分隔而成的一个 Array。

    是String转化为Array的方法，一些比较复杂的字符串操作，可以转化为数组后，用`splice`操作完，再`join`转化回String

    ``` javascript
        str.split([separator[, limit]])

        str.split() // 返回一个只有由整个字符串组成的元素的数组

        str.split("") // 每个字符之间分割
    ```

    - separator 可选

        指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。

    - limit 可选

        一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

* str.charAt

    从一个字符串中返回指定位置(索引)的字符。

    ``` javascript
        str.charAt(index = 0)

        // 相当于
        str[index]
    ```

* str.charCodeAt

    返回指定位置的字符的 Unicode 编码值 (0到65535之间的整数)

    返回值是一表示指定索引处（String中index索引处）字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。

    ``` javascript
        str.charCodeAt(index = 0)
    ```

* str.indexOf

    返回检索值的第一次出现的索引; 如果没有找到 -1。从 fromIndex 处开始搜索。

    ``` javascript
        str.indexOf(searchValue[, fromIndex = 0]);
    ```

* str.lastIndexOf

    返回检索值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。

    ``` javascript
        str.lastIndexOf(searchValue[, fromIndex = 0]);
    ```

* str.toLowerCase

    将调用该方法的字符串值转为小写形式，并返回。

    ``` javascript
        str.toLowerCase()
    ```

* str.toUpperCase

    将调用该方法的字符串值转换为大写形式，并返回。

    ``` javascript
        str.toUpperCase()
    ```

* str.replace

    返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式, 替换值可以是一个字符串或者一个每次匹配都要调用的函数。

    ``` javascript
        str.replace(regexp|substr, newSubStr|function)
    ```

    - regexp (pattern)

        一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。

    - substr (pattern)

    一个要被 newSubStr 替换的字符串。其被视为一整个字符串，而不是一个正则表达式。仅仅是第一个匹配会被替换。

    - newSubStr (replacement)

        用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。

    - function (replacement)

        一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。

* str.match

    当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。

    如果字符串匹配到了表达式，会返回一个数组，数组的第一项是进行匹配完整的字符串，之后的项是用圆括号捕获的结果。如果没有匹配到，返回null

    ``` javascript
        str.match(regexp);
    ```

* str.trim

    会从一个字符串的两端删除空白字符，并返回。

    ``` javascript
        str.trim()
    ```

##### es6 新增方法

* str.codePointAt

    方法返回 一个 Unicode 编码点值的非负整数。能处理4个字节的字符（大于0xFFFF的码点的字符）

    对应 es5 的 `str.charCodeAt`，只能处理2个字节的字符（0xFFFF以内的字符），所以建议用`str.codePointAt`

    ``` javascript
        str.codePointAt(index = 0)
    ```

* str.normalize

    方法会按照指定的一种 Unicode 正规形式将当前字符串正规化。

    ``` javascript
        str.normalize([form])
    ```

    - form 可选 ，默认值为 "NFC"
        - NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
        - NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
        - NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
        - NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。

* str.includes

    如果当前字符串包含被搜寻的字符串，就返回 true；否则返回 false。

    ``` javascript
    str.includes(searchString[, position])
    ```

    - searchString

        要在此字符串中搜索的字符串。

    - position 可选

        从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。


* str.startsWith

    如果参数字符串在原字符串的头部则返回true；否则返回false。

    - searchString

        要在此字符串中搜索的字符串。

    - position 可选

        从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

* str.endsWith

    如果参数字符串在原字符串的尾部则返回true；否则返回false。

    - searchString

        要在此字符串中搜索的字符串。

    - position 可选

        从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

* str.repeat
* str.padStart
* str.trimStart
* str.matchAll
* str.replaceAll

#### 静态方法（构造函数对象的方法）

* String.fromCharCode

    返回使用指定的Unicode值序列创建的字符串。

    ``` javascript
        String.fromCharCode(num1[, ..., numN])
    ```

    - num1, ..., numN

        一组序列数字，表示 Unicode 值。

##### es6 新增静态方法

* String.fromCodePoint

    返回使用指定的Unicode值序列创建的字符串。能识别大于 0xFFFF 的码点值。

    对应 es5 的 `String.fromCharCode` ，只能识别小于等于0xFFFF的码点，所以建议使用 `String.fromCodePoint`

    ``` javascript
        String.fromCodePoint(num1[, ..., numN])
    ```

    - num1, ..., numN

        一组序列数字，表示 Unicode 值。

* String.raw()

    是一个模板字符串的标签函数，是用来获取一个模板字符串的原始字符串的，比如说，占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \n）不会。

    往往用于模板字符串的处理方法

    ``` javascript
    String.raw(callSite, ...substitutions)

    String.raw`templateString`
    ```

    - callSite

        一个模板字符串的“调用点对象”。类似{ raw: ['foo', 'bar', 'baz'] }。

    - ...substitutions

        任意个可选的参数，表示任意个内插表达式对应的值。

    - templateString

        模板字符串，可包含占位符（${...}）。

    返回指定模板字符串的原始字符串。

    eg:

    ``` javascript
    String.raw`Hi\n${2+3}!`
    // 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"
    ```

## 长字符串（未完成）

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
https://javascript.ruanyifeng.com/grammar/string.html

## 模板字面量

## 从字符串中获取单个字符

## 转义字符

通过 `\` 转义，如果没有对应的转义，则忽略 `\` 直接输出

* `\0`  空字符
* `\'`  单引号
* `\"`  双引号
* `\\`  反斜杠
* `\n`  换行
* `\r`  回车
* `\v`  垂直制表符
* `\t`  水平制表符
* `\b`  退格
* `\f`  换页
* `\n ... \nnn`  以八进制代码nn表示的一个字符 `"\172"` 表示 `"z"`，但是在es6字符串模板里面不允许使用，会报错 Octal escape sequences are not allowed in template strings
* `\xnn`    以十六进制代码nn表示的一个字符 `"\x41"` 表示 `"A"`
* `\unnnn`  unicode 码 以十六进制代码nnnn表示的一个字符
* `\u{n} ... \u{nnnnnn}`    unicode codepoint es6 , 相当于`\unnnn` 扩展


* 参考
    - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
    - https://es6.ruanyifeng.com/#docs/string-methods#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9AcodePointAt