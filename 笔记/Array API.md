# js API

- [顺序操作](#顺序)
- [增减操作](#增减)
- [复制操作](#复制)
- [迭代操作](#迭代或者遍历)
- [构造函数对象的方法](#构造函数对象的方法)

``` javascript
    // 合并数组
    arr.concat([value1[, value2[, ...[, valueN]]]]);

    // 转为字符串
    arr.join([separator]);

    // 排序
    arr.sort();

    // 颠倒顺序
    arr.reverse();

    // 尾部添加
    arr.push(element1, ..., elementN);

    // 尾部删除
    arr.pop();

    // 头部添加
    arr.unshift(element1, ..., elementN)

    // 头部删除
    arr.shift();

    // 指定位置添加/删除
    array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);

    // 复制
    arr.slice([begin[,end]]);

    // 检索
    arr.indexOf(searchElement[, fromIndex = 0]);

    // 尾部检索
    arr.lastIndexOf(searchElement[, fromIndex = 0])

    // 遍历一次
    arr.forEach(callback[, thisArg]);

    // 遍历一次，返回结果
    arr.map(callback[, thisArg]);

    // 遍历一次，返回检测结果
    arr.filter(callback[, thisArg]);

    // 遍历一次，返回是否全部通过
    arr.every(callback[, thisArg]);

    // 遍历一次，返回是否有任意通过
    arr.some(callback[, thisArg]);

    // 判断是否是数组
    Array.isArray(obj)
```

## Array

* **arr.concat**

    用于合并两个或多个数组(值)。此方法不会更改现有数组，而是返回一个新数组(不会修改原数组)。

    也可以不添加参数，用于复制数组

    ``` javascript
        arr.concat([value1[, value2[, ...[, valueN]]]])
    ```

* **arr.join**

    将一个数组的所有元素连接成一个字符串并返回这个字符串。

    配合 `arr.splice` 可用于拼接字符串

    ``` javascript
        arr.join([separator])
        // separator ，字符间分隔符，默认为","；为""空字符的时候，返回的字符串之间就没有分隔符了。
    ```


#### 顺序

* **arr.sort**

    对数组的元素进行排序，并返回该数组(会修改原数组)。

    ``` javascript
        arr.sort(); // 元素按照转换为的字符串的各个字符的Unicode位点进行排序。

        arr.sort(function(a,b){return a-b;});
        // 升序

        arr.sort(function(a,b){return b-a;});
        // 降序

        arr.sort(function(a,b){return 1;});
        // 排序颠倒
    ```

* arr.reverse

    将数组中元素的位置颠倒(会修改原数组)

    ``` javascript
        arr.reverse()
    ```

#### 增减

* arr.push

    将一个或多个元素添加到数组的末尾，并返回数组新的长度(会修改原数组)。

    ``` javascript
        arr.push(element1, ..., elementN);
    ```

* arr.pop

    从数组中删除最后一个元素，并返回该元素的值(会修改原数组)。

    ``` javascript
        arr.pop()
    ```

* arr.unshift

    将一个或多个元素添加到数组的开头，并返回新数组的长度(会修改原数组)。

    ``` javascript
        arr.unshift(element1, ..., elementN)
    ```

* arr.shift

    从数组中删除第一个元素，并返回该元素的值(会修改原数组)。

    ``` javascript
        arr.shift()
    ```

* **arr.splice**

    通过删除现有元素和(或)添加新元素来更改一个数组的内容。返回由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

    用于数组元素的增加，删除

    ``` javascript
        array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    ```

    * start​

        指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，如果是负数的话，可以看成是arr.length+start）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

    * deleteCount 可选

        整数，表示要移除的数组元素的个数。如果 deleteCount 是 0，则不移除元素。这种情况下，至少应添加一个新元素。如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。

        如果deleteCount被省略，则其相当于(arr.length - start)。即从start开始后面全部元素删除

    * item1, item2, ... 可选

        要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。

    splice 方法使用 deleteCount 参数来控制是删除还是添加：

    start 参数是必须的，表示开始的位置（从0计数），如：start=0 从第一个开始；start>= array.length-1 表示从最后一个开始。

    1. 从start位置开始删除到结尾的元素。

        `array.splice(start)`

        `array.splice(start,arr.length - start)`

    2. 从start位置开始删除 deleteCount 个元素的元素。

        `array.splice(start, deleteCount)`

    3. 从start位置开始添加item1, item2, ...元素。

        `array.splice(start, 0, item1, item2, ...)`

#### 复制

* **arr.slice**

    返回一个从原数组选择的开始到结束（不包括结束）位置那部分元素浅拷贝得到的新数组。且原始数组不会被修改。(不会修改原数组，可以是负数)

    ``` javascript
        arr.slice([begin[,end]]);

        arr.slice();
        // (0, arr.length)

        arr.slice(begin);
        // (begin, arr.length)

        arr.slice(begin, end);
        // (begin, end)
    ```

    * begin 可选

        从该索引处开始提取原数组中的元素（从0开始）。开始位置，默认值为0。

        如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。

        如果省略 begin，则 slice 从索引 0 开始。

    * end 可选

        在该索引处结束提取原数组元素（从0开始）。slice会提取原数组中索引从 begin 到 end 的所有元素（包含begin，但不包含end）。结束位置，默认值为数组长度。

        slice(1,4) 提取原数组中的第二个元素开始直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。

        如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1)表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。

        如果 end 被省略，则slice 会一直提取到原数组末尾。

        如果 end 大于数组长度，slice 也会一直提取到原数组末尾。

#### 查询

* **arr.indexOf**

    在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。从 fromIndex 处开始搜索。

    可用于判断数组是否有这个值，返回值为大于等于0就代表数组有这个值，返回值为-1（或者小于0）就代表数组中没有这个值。

    ``` javascript
        arr.indexOf(searchElement[, fromIndex = 0])
        // formindex 可选，可以是负数
    ```

* **arr.lastIndexOf**

    返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

    ``` javascript
        arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
        // formindex 可选，可以是负数
    ```

#### 迭代或者遍历

* **arr.forEach**

    对数组的每个元素执行一次提供的函数。没有返回值。

    ``` javascript
        arr.forEach(callback(currentValue, index, array){
            //do something
        }[, thisArg])

        arr.forEach(callback[, thisArg])
    ```
    * callback

        为数组中每个元素执行的函数，该函数接收三个参数：

        * currentValue(当前值)

            数组中正在处理的当前元素。

        * index(索引)

            数组中正在处理的当前元素的索引。

        * array

            forEach()方法正在操作的数组。

    * thisArg可选

        可选参数。当执行回调 函数时用作this的值(参考对象)。

* arr.map

    创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

    新数组是callback返回值组成的数组。

    ``` javascript
        arr.map(callback(currentValue, index, array){
            // Return element for new_array
        }[, thisArg])
    ```

* arr.filter

    创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。即调用callback的返回值为true的元素的数组。

    新数组是符合条件的元素组成的数组。

    ``` javascript
        arr.filter(callback(currentValue, index, array){
            // Return true or false
        }[, thisArg])
    ```

* arr.every

    测试数组的所有元素是否都通过了指定函数的测试（当所有的元素都符合条件才返回true）。

    要全部元素调用callback的返回值为true，才返回true。

    ``` javascript
        arr.every(callback(currentValue, index, array){
            // Return true or false
        }[, thisArg])
    ```

* arr.some

    测试数组的所有元素是否都通过了指定函数的测试（任意元素符合条件就返回true）。

    任意元素调用callback的返回值为true，就返回true。

    ``` javascript
        arr.some(callback(currentValue, index, array){
            // Return true or false
        }[, thisArg])
    ```

#### 构造函数对象的方法

* **Array.isArray(obj)**

    用于确定传递的值是否是一个 Array


