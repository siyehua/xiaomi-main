<template>
    <div>
        <img src="../assets/10013.jpeg" alt="001">
        <img src="../assets/10001.jpeg" alt="001">
        <img src="../assets/10002.jpeg" alt="001">
        <img src="../assets/10016.jpeg" alt="001">
        <img src="../assets/10019.jpeg" alt="001">
        <img src="../assets/10004.jpeg" alt="001">
        <!--    轮播图-->
        <ViewPager></ViewPager>
        <img src="../assets/10018.jpeg" alt="001">
    </div>
</template>

<script>
    import ViewPager from "@/components/ViewPager";

    export default {
        name: "ImageBody",
        components: {ViewPager}
    }
</script>

<style scoped>
    img {
        width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }
</style>