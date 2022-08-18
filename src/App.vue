<template>
    <HeadMenu></HeadMenu>
    <ImageBody></ImageBody>
    <FooterLink></FooterLink>
    <ScrollTop></ScrollTop>
</template>

<script>
    import ImageBody from './components/ImageBody.vue'
    import FooterLink from "@/components/FooterLink";
    import ScrollTop from "@/components/ScrollTop";
    import HeadMenu from "@/components/HeadMenu";

    export default {
        name: 'App',
        components: {
            HeadMenu,
            ScrollTop,
            FooterLink,
            ImageBody
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>
