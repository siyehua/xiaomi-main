<template>
    <div class="root" :style="'background-color: '+ currentBg ">
        <div class="container">
            <div class="img-div">
                <img class="img" src="../assets/10010.png" alt="logo">
            </div>
            <div class="menu-center">
                <span class="menu-item">小米官网</span>
                <span class="menu-item">小米商城</span>
                <span class="menu-item">小米影像</span>
                <span class="menu-item">MIUI</span>
                <span class="menu-item">loT</span>
                <span class="menu-item">云服务</span>
                <span class="menu-item">天星数科</span>
                <span class="menu-item">有品</span>
                <span class="menu-item">小爱开放平台</span>
                <span class="menu-item">企业团购</span>
            </div>
            <div class="account">
                <span class="login">登录</span>
                <span style="padding-right: 1em;padding-left: 1em;">|</span>
                <span class="login">注册</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "HeadMenu",

        setup() {
            function getScrollTop() {
                let scrollPos = 0;
                if (window.pageYOffset) {
                    scrollPos = window.pageYOffset;
                } else if (document.compatMode && document.compatMode !== 'BackCompat') {
                    scrollPos = document.documentElement.scrollTop
                } else if (document.body) {
                    scrollPos = document.body.scrollTop
                }
                return scrollPos;
            }

            let currentBg = ref(' rgba(0, 0, 0, .85)')
            window.onscroll = function () {

                let scrollPos = getScrollTop();
                // console.log('scroll', scrollPos)
                if (scrollPos < 16) {
                    currentBg.value = ' rgba(0, 0, 0, 0)'
                } else {
                    currentBg.value = ' rgba(0, 0, 0, .85)'
                }
            }

            return {
                currentBg,
            }
        }
    }
</script>

<style scoped>
    .root {
        background-color: rgba(0, 0, 0, .85);
        transition: background-color 1s;
        position: fixed;
        width: 100%;
        height: 65px;
        top: 0;
        z-index: 999;
    }

    .container {
        display: flex;
        text-align: left;
        margin: auto auto;
        width: 1440px;
        height: 100%;
    }

    .menu-item {
        font-family: MiSans, serif;
        font-weight: bold;
        font-size: 14px;
        color: white;
        line-height: 65px;
        padding: 1em;
    }

    .menu-item:hover {
        color: #ff6700;
    }

    .menu-center {
        text-align: center;
        flex: 1;
    }

    .account {
        color: white;
        text-align: center;
        line-height: 65px;
    }

    .login:hover {
        color: #ff6700;
    }

    .img-div {
        display: flex;
        width: 65px;
        height: 65px;
        justify-content: center;
        align-items: center;
    }

    .img {
        object-fit: cover;
        width: 34px;
        height: 34px;
    }
</style>