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

    // 返回索引字符的Unicode码
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
```

## String

#### 复制

* **str.slice**

    提取一个字符串的一部分，并返回一新的字符串。(可以是负数)

    提取从 beginSlice 到 endSlice（不包括）之间的字符。

    ``` javascript
        str.slice([beginSlice[, endSlice]])
    ```

    * beginSlice

        可选，默认值为0。从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)

    * endSlice

        可选，默认值为str.length。在该索引（以 0 为基数）处结束提取字符串(不包括endSlice)。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。

* str.substring

    提取从 indexStart 到 indexEnd（不包括）之间的字符。

    ``` javascript
        str.substring([indexStart[, indexEnd]])
    ```

    * indexStart

        可选，默认值为0。一个 0 到字符串长度之间的整数。

    * indexEnd

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

        str.split("") // 返回一个只有由整个字符串组成的元素的数组

        str.split("") // 每个字符之间分割
    ```

    * separator 可选

        指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。

    * limit 可选

        一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

* str.charAt

    从一个字符串中返回指定位置(索引)的字符。

    ``` javascript
        str.charAt(index = 0)

        // 相当于
        str[index]
    ```

* str.charCodeAt

    返回指定位置的字符的 Unicode 编码 (0到65535之间的整数)

    返回值是一表示给定索引处（String中index索引处）字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。

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

    * regexp (pattern)

        一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。

    * substr (pattern)

    一个要被 newSubStr 替换的字符串。其被视为一整个字符串，而不是一个正则表达式。仅仅是第一个匹配会被替换。

    * newSubStr (replacement)

        用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。

    * function (replacement)

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

#### 构造函数对象的方法

* String.fromCharCode

    返回使用指定的Unicode值序列创建的字符串。

    ``` javascript
        String.fromCharCode(num1[, ..., numN])
    ```

    * num1, ..., numN

        一组序列数字，表示 Unicode 值。