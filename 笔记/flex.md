# flex布局

## 属性概览

``` css
/* 容器属性 */
flex-direction: row | row-reverse | column | column-reverse; /* default row */
flex-wrap: nowrap | wrap | wrap-reverse; /* default nowrap */
flex-flow: <flex-direction> || <flex-wrap>; /* default row nowrap */
justify-content: flex-start | flex-end | center | space-between | space-around;
align-items: flex-start | flex-end | center | baseline | stretch;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

/* 项目(弹性元素)属性*/
order: <integer>; /* default 0 */
flex-grow: <number>; /* default 0 */
flex-shrink: <number>; /* default 1 */
flex-basis: <length> | auto; /* default auto */
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]; /* default 0 1 auto */
align-self: auto | flex-start | flex-end | center | baseline | stretch; /* default auto */
```

## 为什么是 弹性盒子?

长久以来，唯一可用的且有稳定的跨浏览器兼容性的能用来构建 CSS 布局的工具只有 floats 和 positioning。它们是即可行，表现也不错的布局方案，但是在某些布局方面它们就有限制，并且难以实现。

以下简单的布局要求是难以或不可能用这样的工具（ floats 和 positioning）方便且灵活的实现的：
* 在父内容里面垂直居中一个块内容。
* 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。
* 使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

------------------

## flex布局

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

（官方）文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器， 我们把一个容器的 display 属性值改为 flex 或者 inline-flex。 完成这一步之后，容器中的直系子元素就会变为 flex 元素（弹性元素）。所有CSS属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：

* 元素排列为一行 (flex-direction 属性的初始值是 row)。
* 元素从主轴的起始线开始。
* 元素不会在主维度方向拉伸，但是可是缩小。
* 元素被拉伸来填充交叉轴大小。
* flex-basis 属性为 auto。
* flex-wrap 属性为 nowrap。

### 容器属性

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

    * flex-start（默认值）：以主轴起点对齐。元素向主轴起点对齐。
    * flex-end：以主轴终点对齐。
    * center：以主轴的中点对齐。
    * space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔相等。所以，项目之间的间隔* 比项目与边框的间隔大一倍。

5. align-items

    `align-items` 属性定义项目在交叉轴上如何对齐。弹性元素在交叉轴上如何分配空间

    ``` css
    align-items: flex-start | flex-end | center | baseline | stretch;
    ```

    * flex-start：交叉轴的起点对齐。元素向交叉轴起点对齐。
    * flex-end：交叉轴的终点对齐。
    * center：交叉轴的中点对齐。
    * baseline: 项目的第一行文字的基线对齐。交叉轴起点到元素基线距离最大的元素将会于交叉轴起点对齐以确定基线。
    * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。弹性元素被在交叉轴方向被拉伸到与容器相同的高度或宽度（官方）。

6. align-content

    align-content属性定义了多根轴线（主轴）的对齐方式。如果项目只有一根轴线，该属性不起作用。

    ``` css
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    ```

    * flex-start：主轴间以交叉轴的起点对齐。
    * flex-end：主轴间以交叉轴的终点对齐。
    * center：主轴间以交叉轴的中点对齐。
    * space-between：主轴间以交叉轴两端对齐，主轴之间的间隔平均分布。
    * space-around：每根主轴两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    * stretch（默认值）：多根主轴占满整个交叉轴，主轴之间没有间隔占满交叉轴。拉伸所有轴来填满剩余空间。剩余空间平均的分配给每根轴