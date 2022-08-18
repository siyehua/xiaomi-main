<template>
    <div class="root">
        <img class="item" :src="data[currentIndex].link" alt="item">
        <svg @click="next" class="icon right" aria-hidden="true">
            <use xlink:href="#icon-angle-right"></use>
        </svg>
        <svg @click="last" class="icon left" aria-hidden="true">
            <use xlink:href="#icon-angle-left"></use>
        </svg>
    </div>
</template>

<script>
    import '../assets/iconfont/iconfont.js'
    import {ref} from "vue";

    export default {
        name: "ViewPager",
        setup() {
            let currentIndex = ref(0)
            let id = Date.now()
            let data = [
                {
                    id: id++,
                    link: require("../assets/10014.jpeg"),
                },
                {
                    id: id++,
                    link: require("../assets/10015.png"),
                },
                {
                    id: id++,
                    link: require("../assets/10017.jpeg"),
                },
            ]

            function last() {
                currentIndex.value--;
                if (currentIndex.value < 0) {
                    currentIndex.value = data.length - 1;
                }
            }

            function next() {
                currentIndex.value++;
                if (currentIndex.value >= data.length) {
                    currentIndex.value = 0
                }
            }

            return {
                last,
                next,
                currentIndex,
                data,
            }
        },
    }
</script>

<style scoped>
    .icon {
        margin-top: calc(100vw * 1080 / 2560 / 2 - 35px);
        position: absolute;
        width: 40px;
        height: 40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: white;
    }

    .right {
        right: 1em;
    }

    .left {
        left: 1em;
    }

    .icon:hover {
        color: #ff6900;
    }

    .item {
        left: 0;
        position: absolute;
        width: 100%;
        height: calc(100vw * 1080 / 2560);
        object-fit: cover;
        vertical-align: bottom;
    }

    .root {
        margin-bottom: calc(100vw * 1080 / 2560);
    }

    .root::before .root::after {
        content: ""; /* 内容随意高度为0会隐藏 */
        display: table; /* 伪对象选择符转化为块元素 */
        clear: both; /* 清除所有浮动 */
    }
</style>