# flex布局

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

（官方）文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器， 我们把一个容器的 display 属性值改为 flex 或者 inline-flex。 完成这一步之后，容器中的直系子元素就会变为 flex 元素（弹性元素）。所有CSS属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：

* 元素排列为一行 (flex-direction 属性的初始值是 row)。
* 元素从主轴的起始线开始。
* 元素不会在主维度方向拉伸，但是可是缩小。
* 元素被拉伸来填充交叉轴大小。
* flex-basis 属性为 auto。
* flex-wrap 属性为 nowrap。

## 容器属性

1. flex-direction

    `flex-direction`属性决定主轴的方向（即项目的排列方向）。

    ``` css
    flex-direction: row | row-reverse | column | column-reverse;
    ```

    * row（默认值）：主轴为水平方向，起点在左端。
    * row-reverse：主轴为水平方向，起点在右端。
    * column：主轴为垂直方向，起点在上沿。
    * column-reverse：主轴为垂直方向，起点在下沿。

2. flex-wrap

    `flex-wrap`属性定义，如果一条轴线排不下，如何换行。

    ``` css
    flex-wrap: nowrap | wrap | wrap-reverse;
    ```

    * nowrap（默认值）：不换行。
    * wrap：换行，第一行在上方。
    * wrap-reverse：换行，第一行在下方。

3. flex-flow

    `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

    ``` css
    flex-flow: <flex-direction> || <flex-wrap>;
    ```

4. justify-content

    `justify-content`属性定义了项目在主轴上的对齐方式。定义了浏览器如何分配顺着父容器主轴的弹性元素之间及其周围的空间（官方）。

    ``` css
    justify-content: flex-start | flex-end | center | space-between | space-around;
    ```

    

5. align-items
6. align-content