# xiaomi-main
仿小米首页UI，主要学习的是 CSS 的知识，没有实现点击功能
### 用到的一些知识点

### block 块元素 水平局中
处于 div 如果固定了宽度，要想水平局中，可以设置它的 margin

```
margin: auto auto;
```

例子：[顶部菜单](./src/components/HeadMenu.vue)，[底部描述](./src/components/FooterLink.vue)等等

### 弹性盒子的水平垂直居中

```
.img-div {
    display: flex;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
}
```

上面代码的意思是，将 div 设置设置成了指定的大小，并且将 `display` 设置为弹性盒子 flex, 那子元素要怎么局中呢？
<br/> `text-align: center` 已经无效了。
<br/> `justify-content: center;` 表示水平局中
<br/> `align-items: center;` 表示垂直居中

例子：[顶部菜单](./src/components/HeadMenu.vue)
### 平分/比例布局
如果希望平分，或者按照一定的比例分配整个布局，可以使用 flex 弹性盒子：

```
.container {
    display: flex;
    width: 1226px;
    height: 350px;
}
.item {
    flex: 1;
}
```


上述 父元素的宽度是 1226，如果 item 有 5 个，flex: 1 表示权重，意思是将父元素 container 平均分成 5 份， 每个元素的宽度是 1226 / 5
<br>如果有一个元素设置了 flex = 2, 则 container 平均是分成 6 份,每个元素的宽度是 1226 / 6 ，那个设置权重 2 的宽度是 1226 / 6 * 2
<br/>如果某个 A 元素设置了宽度等于 226, 则其他 4 个元素的高度是：（1226 - 226）/ 5, A 元素宽度是 （1226 - 226）/ 5 + 226.
也就是说，弹性和的 flex 权重，总是先减去需要的宽度，再进行平分。

例子：[顶部菜单](./src/components/HeadMenu.vue)，[底部描述](./src/components/FooterLink.vue)等等


### 动画

一下简单的动画，可以直接使用 `transition` 来进行设置：

```
transition: background-color 1s;
transition: all 1s;
```

上面两行代码，第一个是指背景变化时，能够平缓的变化，变化的动画时间是 1s
第二个是任意一个变化都添加对应的动画

例子：[顶部菜单](./src/components/HeadMenu.vue)


### 图片的缩放

图片缩放，使用 `object-fit`

```
.img {
    object-fit: cover;
    width: 34px;
    height: 34px;
}
```

`cover` 表示先让长或宽先铺满，其他的裁掉<br/>
`contain` 表示会尽可能看到宽高，但是可能会有空隙

例子：[顶部菜单](./src/components/HeadMenu.vue)


### 固定定位

`position: fixed;` 固定定位开启后，会脱离文档流，但是它只能相对于窗口，所以非常适合用来做菜单。
<br>固定定位必须设置方向属性，这里就设置了 `top: 0;`， 表示在最顶部。


```
.root {
    position: fixed;
    width: 100%;
    height: 65px;
    top: 0;
    z-index: 999;
}
```

`z-index` 如果有其他的控件也开启了定位，则有可能会被遮住，使用这个属性能设置层级

例子：[顶部菜单](./src/components/HeadMenu.vue) [滚动到网页最顶部的小按钮](./src/components/ScrollTop.vue)

### 图片留白问题

两张图片如果从上往下排，会有一定的空隙，因为图片默认的对齐方式是 `baseline`，只要它的 value 值不是这个，就没有空隙：

```
    img {
        width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }
```

例子：[主页的多图排列](./src/components/ImageBody.vue)

### 平滑滚动到顶部
js 滚动到顶部的方法有很多，最简单的是：

```js
window.scrollTo({top: 0, behavior: 'smooth'})
```

例子： [滚动到网页最顶部的小按钮](./src/components/ScrollTop.vue)


### CSS动态计算值
js 是很容易动态计算的，但是 css 的比较有限，只能通过 `calc` 函数来计算

```
    .icon {
        margin-top: calc(100vw * 1080 / 2560 / 2 - 35px);
    }
```

上面代码，通过计算视窗的宽度和图片的宽比，来得到垂直间距

例子： [轮播图](./src/components/ViewPager.vue)


### vue 动态修改图片的 src

默认 src 的链接，可以直接通过 `src = '../assets/abc.jpg'` 来设置，但是一旦动态修改的话，直接使用这个字符串是无法识别的。
因为在模板中直接编写，会动态的去解析，但是后续动态修改，是没有解析的，所以会导致图片无法加载。

```
require("../assets/10014.jpeg")
```

解决方法比较简单，直接把 src 的字符串用 `require` 包裹起来即可。

例子： [轮播图](./src/components/ViewPager.vue)

### iconfont 编译问题
引入了 iconfont 后，会导致编译无法通过，删除 `package.json` 文件中的 `eslint:recommended` 即可：

```
eslintConfig{
    "eslint:recommended"
}
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
