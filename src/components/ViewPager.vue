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

            function changeImg() {
                setTimeout(changeImg, 3000)
                next()
            }

            let t = setTimeout(changeImg, 3000)

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
                t,
                last,
                next,
                currentIndex,
                data,
            }
        },
        beforeUnmount() {
            window.clearTimeout(this.t)
        }
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
        content: ""; /* ?????????????????????0????????? */
        display: table; /* ???????????????????????????????????? */
        clear: both; /* ?????????????????? */
    }
</style>