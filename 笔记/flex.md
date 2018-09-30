# flex布局

## 属性概览

``` css
/* 容器属性 */
flex-direction: row | row-reverse | column | column-reverse; /* default row */
flex-wrap: nowrap | wrap | wrap-reverse; /* default nowrap */
flex-flow: <flex-direction> || <flex-wrap>; /* default row nowrap */
justify-content: flex-start | flex-end | center | space-between | space-around; /* default flex-start */
align-items: flex-start | flex-end | center | baseline | stretch; /* default stretch */
align-content: flex-start | flex-end | center | space-between | space-around | stretch; /* default stretch */

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

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

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
* 弹性元素的默认宽高由其内容决定

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

    `align-content` 属性定义了多根轴线（主轴）的对齐方式。如果项目只有一根轴线，该属性不起作用。

    ``` css
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    ```

    * flex-start：主轴间以交叉轴的起点对齐。
    * flex-end：主轴间以交叉轴的终点对齐。
    * center：主轴间以交叉轴的中点对齐。
    * space-between：主轴间以交叉轴两端对齐，主轴之间的间隔平均分布。
    * space-around：每根主轴两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    * stretch（默认值）：多根主轴占满整个交叉轴，主轴之间没有间隔占满交叉轴。拉伸所有轴来填满剩余空间。剩余空间平均的分配给每根轴


### 元素属性

5. flex

	`flex` 规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。这是一个简写属性，用来设置`flex-grow`, `flex-shrink`与`flex-basis`。

	``` css
	flex: none | auto | initial | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];
	```

	特殊值：

	* `auto`

		元素会根据自身的宽度与高度来确定尺寸，但是会自行伸长以吸收flex容器中额外的自由空间，也会缩短至自身最小尺寸以适应容器。这相当于将属性设置为 `flex: 1 1 auto`.

	* `initial`

		属性默认值， 元素会根据自身宽高设置尺寸。它会缩短自身以适应容器，但不会伸长并吸收flex容器中的额外自由空间来适应容器 。相当于将属性设置为 `flex: 0 1 auto`。

	* `none`

		元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应flex容器。相当于将属性设置为 `flex: 0 0 auto`。


	flex 属性可以指定1个，2个或3个值。

	* 单值语法: 值必须为以下其中之一:

		* 一个无单位数(`<number>`): 它会被当作`<flex-grow>`的值。例如：`flex:1`
		* 一个有效的宽度(width)值: 它会被当作 `<flex-basis>`的值。例如：`flex:100px`  `flex:50%`
		* 关键字`none`, `auto`,或`initial`.

	* 双值语法: 第一个值必须为一个无单位数，并且它会被当作`<flex-grow>`的值。第二个值必须为以下之一：

		* 一个无单位数：它会被当作`<flex-shrink>`的值。例如：`flex: 1 1`
		* 一个有效的宽度值: 它会被当作`<flex-basis>`的值。例如：`flex: 1 50%`

	* 三值语法:

		* 第一个值必须为一个无单位数，并且它会被当作<flex-grow>的值。
		* 第二个值必须为一个无单位数，并且它会被当作 <flex-shrink>的值。
		* 第三个值必须为一个有效的宽度值， 并且它会被当作<flex-basis>的值。

	默认值问题：

	* flex元素的flex样式默认值是`0 1 auto`，即 flex-grow 的默认值为 0，flex-shrink 默认值为1 ，flex-basis的默认值为auto。
	* 但是设置flex时，flex会自动给予`<'flex-grow'>`和`<'flex-basis'>`设一个另外一个值作为取值的默认值
	* flex取值：
		1. `<'flex-grow'>`
		定义 flex 元素的 flex-grow 属性，详见 <number>。默认值为 1，负值无效。
		2. `<'flex-shrink'>`
		定义 flex 元素的 flex-shrink 属性，详见 <number>。默认值为 1，负值无效。
		3. `<'flex-basis'>`
		定义 flex 元素的 flex-basis 属性。任何可用于 width 和 height 的值都可接受。若值为0，则必须加上单位，以免被视作伸缩性。 默认值为0%。
	* 即当一个使用有效的宽度时，flex-grow会从0变为1，`flex: 50%` 相当于 `flex: 1 1 50%`
	* 当使用一个或两个无单位数时, flex-basis会从auto变为0，`flex: 1 1`  相当于 `flex: 1 1 0%`.
